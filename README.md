# 🌾 AgriConnect - Smart Agriculture & Food Distribution Platform

### 👥 Team: FoodChainX

AgriConnect is a full-stack platform that connects farmers, buyers, and citizens through technology. It uses GPS, satellite, and market data to guide farmers on **what to grow, when to grow, and how to grow**, enables **direct produce selling**, and links **citizens to public food distribution systems (PDS)**.

---

## 🚀 Live Deployment

| Component | Service | URL |
|-----------|---------|-----|
| **Frontend** | Vercel | [https://agri-connect-smart-agriculture-food.vercel.app](https://agri-connect-smart-agriculture-food.vercel.app) |
| **Backend** | Render | [https://agriconnect-smart-agriculture-food.onrender.com](https://agriconnect-smart-agriculture-food.onrender.com) |
| **Database** | Railway | MySQL (Managed) |
| **Storage** | Cloudinary | Image Storage |

---

## ✨ Key Features

### 🌱 For Farmers
- **Direct Selling**: Upload crops with images, prices, and quantities.
- **Dashboard**: Manage listings and view market trends.
- **AI Recommendations**: (Planned) GPS-based crop suggestions.

### 🔐 Authentication & Security
- **Google OAuth**: One-click login with Google.
- **Email/Password**: Secure signup and login with hashed passwords (Bcrypt).
- **Role-Based Access**: Farmers, Buyers, and Admins.
- **Secure Sessions**: HttpOnly cookies with cross-site support.

### 🛒 For Buyers
- **Marketplace**: Browse fresh produce directly from farmers.
- **Contact**: Connect directly with sellers.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, CSS3, Axios
- **Backend:** Node.js, Express.js
- **Database:** MySQL (via Railway)
- **ORM:** Prisma
- **Authentication:** Passport.js (Google & Local Strategies)
- **File Storage:** Cloudinary
- **Deployment:** Vercel (Client), Render (Server)

---

## ⚙️ Local Development Setup

Follow these steps to run the project locally on your machine.

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/AgriConnect.git
cd AgriConnect
```

### 2️⃣ Install Dependencies
**Frontend:**
```bash
cd client
npm install
```

**Backend:**
```bash
cd ../server
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file inside the `server/` directory with the following keys:

```env
# Server Port
PORT=5001

# Database Connection (MySQL)
DATABASE_URL="mysql://user:password@host:port/database"

# Google OAuth Credentials (from Google Cloud Console)
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# Cloudinary Credentials (for Image Uploads)
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

# Session Secrets
COOKIE_KEY="secret_key_1"
COOKIE_KEY_2="secret_key_2"

# Client URL (for CORS and Redirects)
CLIENT_URL="http://localhost:3000"
NODE_ENV="development"
```

Create a `.env` file inside the `client/` directory:

```env
REACT_APP_API_URL="http://localhost:5001"
```

### 4️⃣ Database Setup
Run Prisma migrations to set up the database schema:
```bash
cd server
npx prisma migrate dev --name init
```

### 5️⃣ Run the Application

**Start Backend:**
```bash
cd server
npm run dev
```
*Server runs on http://localhost:5001*

**Start Frontend:**
```bash
cd client
npm start
```
*Client runs on http://localhost:3000*

---

## 📂 Project Structure

```
AgriConnect/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Full page views
│   │   ├── context/        # Global State (UserContext)
│   │   └── App.js          # Main Router
│   └── package.json
│
├── server/                 # Express Backend
│   ├── src/
│   │   ├── config/         # Passport & Cloudinary Config
│   │   ├── controllers/    # Route Logic
│   │   ├── middlewares/    # Auth & Error Handling
│   │   ├── routes/         # API Routes
│   │   └── app.js          # App Entry Point
│   ├── prisma/             # Database Schema
│   └── package.json
│
└── README.md
```''

---

## 📜 License

This project is licensed under the MIT License.

---

## � Team Members & Roles

| Name | Email | Role |
|------|-------|------|
| **Akash Dhar Dubey** | akash.dubey01@adypu.edu.in | Project Lead / Backend Developer |
| **Suvendu Kumar Sahoo** | suvendu.sahu@adypu.edu.in | Frontend Developer |
| **Aditya Phalke** | aditya.phalke@adypu.edu.in | Database & API Integration |
| **Yash Mali** | yash.mali@adypu.edu.in | UI/UX Designer & Documentation |

### 🏆 Hackathon Details
**Theme:** Smart Agriculture & Food Security
**Event:** Sustainable Tech Innovation 2025
