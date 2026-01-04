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
