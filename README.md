# Freelance Task Marketplace

## 🔗 Live Website
👉  
 

---

## 📌 Project Purpose
Freelance Task Marketplace is a full-stack web platform that connects individuals who need small tasks completed with freelancers looking for work opportunities. Users can post tasks, browse available tasks, bid on them, and manage their own task listings securely through authentication-based access control.

---

## ✨ Key Features
- 🔐 Secure authentication using Email/Password and Google Login
- 📝 Users can post tasks with deadlines, budgets, and categories
- 🔎 Browse all tasks and view detailed task information
- 📋 Logged-in users can manage (update/delete) their own posted tasks
- 📊 Featured tasks section sorted by most recent deadlines
- 📱 Fully responsive design for mobile, tablet, and desktop
- 🔔 Toast/SweetAlert notifications for all success and error messages
- 🔒 Private/protected routes with persistent login on reload
- ⚡ Loading spinner shown during data fetching
- ❌ Custom 404 Not Found page

---

## 🧭 Pages & Routes
- Home
- Browse Tasks
- Task Details (Private)
- Add Task (Private)
- My Posted Tasks (Private)
- Update Task (Private / Modal-based optional)
- Login
- Register
- 404 Not Found

⚠️ Navbar and Footer are available on all pages except the 404 page.

---

## 🔐 Authentication
- Email & Password Authentication
- Google Sign-In
- Password validation rules:
  - At least one uppercase letter
  - At least one lowercase letter
  - Minimum 6 characters
- Authentication state persists on page reload
- No email verification or password reset (intentionally omitted)

---

## 🧱 CRUD Operations
- **Create:** Add new tasks with title, category, description, deadline, and budget
- **Read:** Browse all tasks and view detailed task pages
- **Update:** Update task details (only by task owner)
- **Delete:** Delete tasks with confirmation prompt
- **Access Control:** Users can only manage their own posted tasks

---

## 🛠️ Technologies Used

### Client Side
- React
- React Router DOM
- Tailwind CSS
- Firebase Authentication
- Axios
- React Hot Toast / SweetAlert2

### Server Side
- Node.js
- Express.js
- MongoDB
- CORS
- dotenv

---

## 📦 NPM Packages Used
- react
- react-router-dom
- firebase
- axios
- react-hot-toast / sweetalert2
- express
- mongodb
- cors
- dotenv

---

## 🌍 Environment Variables
All sensitive credentials are secured using environment variables.

### Client (.env)
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id