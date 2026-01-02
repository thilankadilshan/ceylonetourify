📝 Ceylonetourify | Sri Lanka Tourism Guide
A modern, high-performance web application built for a professional tourism guide in Sri Lanka. This project uses a Clean Monorepo architecture to manage both the frontend and backend within a single repository.

🚀 Tech Stack
Frontend: React + Vite (Lightning-fast development & bundling)
Backend: Node.js + Express.js
Database: MongoDB Atlas (Cloud-based NoSQL)
Image Management: Cloudinary (Optimized image hosting for galleries)
Styling: Tailwind CSS

📂 Project Structure
The project follows a Monorepo pattern to keep the codebase clean and maintainable.

Plaintext

ceylonetourify/
├── client/ # FRONTEND (React + Vite)
│ ├── public/ # Static files (Favicon, robots.txt)
│ ├── src/
│ │ ├── assets/ # Images, Global CSS (Tailwind)
│ │ ├── components/ # Reusable UI (Navbar, Footer, Buttons)
│ │ ├── pages/ # Full Pages (Home.jsx, Gallery.jsx, Tours.jsx)
│ │ ├── api/ # Axios configurations & API calls
│ │ ├── App.jsx # Main Application Logic
│ │ └── main.jsx # Entry point for React
│ ├── .gitignore # (Standard Vite ignore)
│ ├── index.html # Main HTML file
│ ├── package.json # Frontend dependencies (Axios, React Router)
│ └── vite.config.js # Vite configuration
│
├── server/ # BACKEND (Node + Express)
│ ├── controllers/ # Logic for your routes (Get Tours, Add Tour)
│ ├── models/ # Database Schemas (Tour.js, Gallery.js)
│ ├── routes/ # API route definitions
│ ├── middleware/ # Auth/File Upload (Multer) logic
│ ├── .env # MONGO_URI, CLOUDINARY_KEYS (Keep Secret!)
│ ├── index.js # Main Express Entry Point
│ └── package.json # Backend dependencies (Mongoose, Express)
│
├── .gitignore # ROOT IGNORE (Blocks node_modules, .env)
├── package.json # ROOT BRAIN (Runs both apps with Concurrently)
└── README.md # Project documentation for GitHub

🛠️ Getting Started
Prerequisites
Node.js (v18 or higher recommended)
npm

Installation
Clone the repository:

git clone https://github.com/thilankadilshan/ceylonetourify.git
cd ceylonetourify

Install all dependencies: We use a custom script to install everything at once:

npm run install-all

🚦 Development

To run both the Frontend and Backend simultaneously with a single terminal command:

npm run dev

Frontend: http://localhost:5173
Backend: http://localhost:5000

📦 Features (Roadmap)

[x] Full-Stack Monorepo Setup
[ ] MongoDB Atlas Integration
[ ] Cloudinary Image Gallery for Tour Photos
[ ] Dynamic Tour Listing Pages
[ ] Mobile-Responsive UI for Tourists

👤 Author
Thilanka Dilshan
Software Engineer from Sri Lanka
GitHub: @thilankadilshan
