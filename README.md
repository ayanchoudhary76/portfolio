# Premium MERN Stack Portfolio

A fully responsive, production-ready MERN stack portfolio website built for **Ayan Choudhary**. Features a unique, modern, and premium UI/UX with Framer Motion animations, a custom cursor trail, animated backgrounds, and Netflix-style horizontal scrolling.

## Features Spotlight
- **Custom Aesthetic**: Glassmorphism cards, glowing boundaries, and a dark/light mode toggle.
- **Framer Motion Elements**: Page load animations, hover scaling, scroll-triggered reveals, and a custom mouse cursor trail.
- **Smart Components**:
  - Filterable Skills grid with glowing MERN stack highlights.
  - Netflix-style horizontal scrolling Projects section with expandable modals.
  - Interactive Contact Form wired to an Express backend.
  - Dynamic profile stats visual layout for LeetCode and HackerRank.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS v3, Framer Motion, React Icons
- **Backend**: Node.js, Express.js, MongoDB (Mongoose setup included)

---

## Getting Started

### Prerequisites
Make sure you have Node.js (v18+) and npm installed on your machine.
If you plan to use MongoDB, have a MongoDB URI ready.

### 1. Backend Setup
1. Open a terminal and navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file (one is provided) with:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/portfolio
   ```
4. Start the development server:
   ```bash
   npm run dev
   # or `npm start`
   ```
   The backend will run on `http://localhost:5000`.

### 2. Frontend Setup
1. Open a *new* terminal and navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   The frontend will be accessible at `http://localhost:5173`.

---

## Deployment Guide

### Deploying the Frontend (Vercel, Netlify, Render)
1. Push your code to GitHub.
2. Link your repository to Vercel/Netlify.
3. Set the Root Directory to `frontend`.
4. The Build command will auto-detect as `npm run build` and output directory as `dist`.
5. Add any environmental variables if needed (e.g., `VITE_API_URL` pointing to your backend).

### Deploying the Backend (Render, Railway, Heroku)
1. Link your repository to a Node.js hosting service (e.g., Render Web Service).
2. Set the Root Directory to `backend`.
3. Build Command: `npm install`
4. Start Command: `npm start`
5. Add `.env` variables (`PORT`, `MONGO_URI`, etc.) in the platform's Environment Settings.
