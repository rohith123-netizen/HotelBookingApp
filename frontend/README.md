# Hotel Owner Dashboard & Add Room Module

This project contains two core UI components used in a hotel owner panel:

1. **Dashboard** – Displays bookings, revenue, and recent activity
2. **Add Room** – Allows hotel owners to add new rooms with images, pricing, and amenities

Both components are built using **React**, **React Router**, and **Tailwind CSS**.

---

## 1. Dashboard Component

### Purpose
The Dashboard provides hotel owners with an overview of:
- Total bookings
- Total revenue
- Recent bookings with payment status

It acts as the **default (index) page** inside the owner layout.

---

### Key Features
- Uses `useState` to manage dashboard data
- Displays summary cards (bookings & revenue)
- Renders recent bookings in a table
- Payment status is visually differentiated (Completed / Pending)

---

### Concepts Used
- `useState` for reactive data
- `.map()` for rendering lists
- Conditional styling based on payment status
- Semantic HTML tables (`table`, `thead`, `tbody`, `tr`, `td`)

---

### Data Flow
```txt
dashboardDummyData → useState → UI Render


# 🏨 Room Details Page

This project includes a **Room Details** page used in a hotel booking application.

The page displays complete information about a selected hotel room, including images, amenities, pricing, availability, and host details.

It is built using **React**, **React Router**, and **Tailwind CSS**.

---

## 1. RoomDetails Component

### Purpose
The RoomDetails component is responsible for:

- Displaying detailed information about a selected room
- Showing an interactive image gallery
- Listing amenities and room specifications
- Allowing users to check room availability
- Displaying host and review information

This page is rendered when a user navigates to:


---

### Key Features
- Fetches room data using URL parameters
- Displays a main image with clickable thumbnails
- Shows hotel name, room type, discount, and price per night
- Renders amenities with icons
- Includes a check-in / check-out availability form
- Displays host information with ratings
- Fully responsive layout

---

### Concepts Used
- `useParams` for dynamic routing
- `useState` for local state management
- `useEffect` for loading room data
- Conditional rendering
- `.map()` for dynamic list rendering
- Reusable components (`StarRating`)
- Tailwind CSS utility classes

---

### Data Flow
```txt
URL (room id)
      ↓
useParams()
      ↓
roomsDummyData.find()
      ↓
useState (room, mainImage)
      ↓
UI Render
