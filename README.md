# 🍲 MERN RecipeSharing Application

A full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to register, log in, and interact with blog-style recipes. Users can create, update, delete, and view recipes with categories and images.

---

## 📁 Project Structure

recipe-sharing-app/
├── client/                     # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/         # Reusable components (Navbar, PostItem, etc.)
│   │   ├── context/            # AuthContext for user session management
│   │   ├── hooks/              # Custom React hooks
│   │   ├── pages/              # Pages like Home, Login, Register, Dashboard
│   │   ├── services/           # Axios instance + API functions
│   │   ├── utils/              # ProtectedRoute and helpers
│   │   └── App.jsx             # Main component with routes
│   └── package.json
│   └── vite.config.js
│
├── server/                     # Node.js backend
│   ├── config/                 # MongoDB config
    ├─  Controllers/            # Route logic (Post, Auth, Category, etc.)
│   ├── middleware/             # Auth, validateRequest, file upload
│   ├── models/                 # Mongoose schemas (User, Post, Category)
│   ├── routes/                 # Express routers
│   ├── uploads/                # Uploaded images
│   ├── server.js               # Main Express entry file 
│   ├─  package.json               
│   └── .env                    # Environment variables
├── screenshots                 # Screenshots of the application                        
├── .gitignore
└── README.md

---

## 🚀 Deployment Instructions

### 🛠 Prerequisites

- Node.js (v18+)
- MongoDB Atlas 
- Hosting accounts:
  - Backend: [Render](https://render.com) 
  - Frontend: [Vercel](https://vercel.com)

---

### 📦 Backend Deployment (Express API)

1. **Push your backend code to GitHub**

2. **Deploy on Render**
   - Log in to [Render](https://render.com)
   - Create a new Web Service
   - Connect your GitHub repo
   - Set **Build Command**: `pnpm install`
   - Set **Start Command**: `pnpm start`
   - Set Environment Variables:
     - `MONGODB_URI` = mongodb+srv://lutfikhatib112:VnPO3JBpm8SqDfRK@cluster0.ys9ooiz.mongodb.net/RecipeSharingApp?retryWrites=true&w=majority&appName=Cluster0
     - `JWT_SECRET` = your secret key
     - `PORT` = 5000
   - Click **Deploy**

3. **Ensure uploads work**
   - Add this line in `server.js`:
     ```js
     app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
     ```

---

### 🌐 Frontend Deployment (React App)

1. **Build the React app**
   ```bash
   cd client
   pnpm run build

2. **Deploy on Vercel**
   - connect GitHub repo and set:
   - **Build command**: pnpm run build
   - **Publish directory**: dist 

3. **Set Environment Variable**

On Vercel, go to Site Settings → Environment Variables:

     - `VITE_API_URL`=https://week-4-mern-integration-assignment-bfk9.onrender.com/api

4. **Fix React Router routes**

Add a _redirects file inside dist/:
 ```bash
/*    /index.html   200

### 🔁 Rollback Steps

**Backend (Render)**

* - Go to your service dashboard on Render
* - Open the "Deploys" tab
* - Select a previously successful deployment
* - Click Rollback

**Frontend (Vercel)**

* - Go to your Vercel dashboard → Site → Deploys
* - Find the previously working deploy
* - Click Publish Deploy

## 🧰 Tech Stack

* MongoDB + Mongoose
* Express.js
* React + Vite
* Node.js
* JSON Web Tokens (JWT)
* Multer (for image upload)
* Helmet + Morgan (security + logging)


## 📄 Features

* 🔐 User registration & login
* 📝 Create, edit, delete, and view recipes
* 🗂 Category filtering
* 📁 Image uploads (Multer)
* 🌍 RESTful API integration
* ✅ Protected Routes (JWT)
* 🧠 Error handling middleware
* 🌐 Deployment-ready setup

## 🧪 Possible Improvements

* Add Comments System
* User Profile Pages
* Search & Filter Enhancements
* Pagination
* Like/Bookmark Recipes

## 📦 Deployment & Maintenance Summary

### 🚀 Deployment Steps

- **Frontend Deployment**: Vercel  
  - Connected via GitHub repo
  - Auto-deploys on push to `main` branch
- **Backend Deployment**: Render  
  - Connected via GitHub
  - Configured `build` and `start` commands
  - Environment variables securely stored on Render

### 🔄 Rollback Strategy

- **Vercel**:  
  - Easily rollback by selecting a previous deployment on the dashboard
- **Render**:  
  - Re-deploy a previous successful commit manually via the dashboard
- **GitHub**:  
  - Use Git history to revert to previous working code if needed

### 📊 Monitoring Tools

- **UptimeRobot**:  
  - Monitors:
    - Frontend: `https://week-7-devops-deployment-assignment-lilac.vercel.app/`
    - Backend Health: `https://week-7-devops-deployment-assignment-stci.onrender.com/api/health`
  - Sends email alerts if downtime occurs
- **Sentry**:
  - Error tracking set up for both frontend and backend
  - Helps detect and fix runtime issues
- **Health Check**:  
  - Backend `/api/health` route responds with status and uptime

### 🛠️ Maintenance Plan

- **Regular Updates**:
  - Keep dependencies up-to-date using `npm outdated` or `pnpm update`
- **Security Patches**:
  - Monitor for critical vulnerabilities using GitHub security alerts
- **Database Backups**:
  - Export MongoDB regularly (use MongoDB Atlas or CLI backup tools)
- **Scheduled Checks**:
  - Weekly review of Sentry logs and uptime reports
  - Monthly review of deployment configurations and server usage


## 👤 Author

* Lutty112 — GitHub Profile
* Project submitted for Power Learn Project MERN Stack Track

## 📄 License

* This project is for educational use only under the Power Learn Project program.
