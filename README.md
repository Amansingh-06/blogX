# 📝 blogX — Full Stack Blog Editor with Auto-Save Draft Feature

blogX is a full-stack blog editor web application that allows users to create, edit, save drafts, and publish blog posts with an auto-save feature. Built as part of an internship assignment, this project showcases frontend/backend integration, REST APIs, MongoDB usage, and optional JWT-based authentication.

---

## 🚀 Features

- Write blogs with title, content, and optional tags
- Save as Draft and Publish functionality
- Auto-save drafts every 30 seconds or after 5 seconds of user inactivity
- Visual notification on auto-save
- View list of all blogs (separate tabs for Published and Drafts)
- Edit and update existing blogs/drafts
- JWT Authentication for protected routes (optional bonus)

---

## 🧱 Tech Stack

### Frontend
- React.js (with Hooks)
- Axios (for API calls)
- react-hot-toast
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT) - for authentication (optional)

---


---

## 🔐 Environment Variables

Create a `.env` file in the `backend` with the following keys:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/blogX
JWT_SECRET=your_jwt_secret_key

**## setup**
(backend)
cd backend
npm install
touch .env
# Add PORT, MONGODB_URI, JWT_SECRET to .env
node server.js
(frontend)
cd blogX
npm install
npm run dev


