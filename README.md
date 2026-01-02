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
├── client/ # Frontend (React + Vite)
│ ├── src/
│ │ ├── components/ # Reusable UI components (Navbar, Footer, etc.)
│ │ ├── pages/ # Page-level components (Home, Gallery, Tours)
│ │ └── assets/ # Static assets (logos, icons)
│ └── package.json
├── server/ # Backend (Node + Express)
│ ├── models/ # Database schemas (Mongoose)
│ ├── routes/ # API endpoint definitions
│ ├── controllers/ # Route logic & business rules
│ └── index.js # Server entry point
├── .env # Environment variables (DB keys, API secrets)
├── .gitignore # Files excluded from Version Control
└── package.json # Root configuration for running both apps

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
