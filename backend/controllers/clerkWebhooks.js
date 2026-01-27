import User from "../models/User.js";
import { Webhook } from "svix";
import connectDB from "../configs/db.js";

const clerkWebhooks = async (req, res) => {
  try {
    // 🔑 MUST be first (Vercel cold start)
    await connectDB();

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    const event = whook.verify(req.body, headers);

    const { data, type } = event;

    // 🔑 SAFE email extraction
    const email =
      data.email_addresses?.[0]?.email_address ||
      data.primary_email_address?.email_address ||
      "";

    const userData = {
      _id: data.id,
      email,
      username: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
      image: data.image_url,
      role: "user",
      recentSearchedCities: [],
    };

    if (type === "user.created") {
      const exists = await User.findById(data.id);
      if (!exists) {
        await User.create(userData);
      }
    }

    if (type === "user.updated") {
      await User.findByIdAndUpdate(data.id, userData);
    }

    if (type === "user.deleted") {
      await User.findByIdAndDelete(data.id);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    res.status(400).json({ success: false, error: error.message });
  }
};

export default clerkWebhooks;
