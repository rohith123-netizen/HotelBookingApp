import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {
    // 1. Create Svix webhook instance using Clerk secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // 2. Extract required Svix headers from request
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // 3. Verify webhook authenticity
    await whook.verify(JSON.stringify(req.body), headers);

    // 4. Extract data from webhook payload
    const { data, type } = req.body;

    // 5. Prepare user object for database
    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      username: data.first_name + " " + data.last_name,
      image: data.image_url,
    };

    // 6. Handle different webhook events
    switch (type) {
      case "user.created": {
        await User.create(userData);
        break;
      }

      case "user.updated": {
        await User.findByIdAndUpdate(data.id, userData);
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        break;
      }

      default:
        break;
    }

    // 7. Send success response
    res.json({ success: true, message: "Webhook Received" });

  } catch (error) {
    // 8. Error handling
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;
