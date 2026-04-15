# it-management-system


📌 Overview

The IT Management System is a web-based application designed to streamline and centralize IT operations. It allows administrators and support teams to manage users, devices, tasks, and system activities efficiently in one place.

🚀 Features
👤 User Management
Create, update, and delete users
Role-based access control (Admin, User, Support)

🖥️ Device Management
Track devices (computers, servers, IoT devices)
Monitor status and assignments

📝 Ticketing System
Create and manage support tickets
Assign tickets to team members
Track status (Open, In Progress, Resolved)

📊 Dashboard
Real-time system overview
Activity logs and analytics

🔐 Authentication & Security
Secure login system
Session management

🛠️ Tech Stack
Frontend: React / Next.js
Backend: Node.js / Express
Database: MongoDB
Styling: Tailwind CSS

📂 Project Structure
/client        # Frontend (React / Next.js)
/server        # Backend (Node.js / Express)
/models        # Database models
/routes        # API routes
/controllers   # Business logic

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/arsanyattalla/it-management-system.git
cd it-management-system
2. Install dependencies
npm install
3. Setup environment variables

Create a .env file in the root directory and add:

MONGO_URI=your_mongodb_connection
PORT=5000
JWT_SECRET=your_secret_key
4. Run the application
npm run dev
🌐 Usage
Register or log in as an admin
Add users and assign roles
Register devices in the system
Create and manage support tickets
Monitor activity through the dashboard
