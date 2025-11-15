# Emotional Journal

A simple app to write and track your emotions and journal entries.

---

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js + Express
- **Database:** MongoDB

---

## Setup

### Backend
```bash
cd backend
npm install
# Create .env file with: MONGODB_URI=mongodb://localhost:27017/emotional-journal
npm start
# Runs on http://localhost:8000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

---

## API Endpoints

| Method | URL | Purpose |
|--------|-----|---------|
| POST | `/api/entries/add` | Create new entry |
| GET | `/api/entries/all` | Get all entries |

---

## How It Works

1. User fills emotion form → Frontend sends POST request
2. Backend saves to MongoDB
3. Frontend fetches all entries → displays in list
4. Each entry shows emotion, note, and date

---

## Reflection Questions (Fill These In)

### 1. Architecture Thinking: Why this frontend + backend? How do they communicate?
**My answer:**
- I chose React for the frontend because it provides a clean, component-based structure and makes building a simple and responsive UI fast. For the backend, I used Node.js with Express because it keeps the architecture lightweight, handles API routes efficiently, and works well with JavaScript on both frontend and backend. MongoDB stores each emotion entry in a flexible format, making it easy to save and retrieve journal data.

- The frontend communicates with the backend through RESTful API calls. When the user submits an emotion and note, React sends a POST request to the Express server, which validates the data and saves it to MongoDB. Similarly, to show past entries, the frontend sends a GET request and receives JSON data that updates the UI. This creates a smooth and simple client–server flow.

### 2. Problem Solving: What was the hardest part, and how did you solve it?
**My answer:**
- The biggest challenge I faced was a confusing API bug where the frontend wasn’t displaying the entries even though the console showed data. I realized the issue came from a small mistake in my backend response structure—my message and data fields were mixed up, so the frontend was not receiving an array as expected. To solve this, I tested the API in Postman, checked the actual JSON structure, and corrected the response format. Once I returned the entries properly as an array, the frontend started working smoothly.

### 3. Database Design: How is the data structured? How would you scale it for 1M users?
**My answer:**
- For my anonymous web app, the data is stored in a simple and flexible MongoDB structure with collections for messages and basic metadata. To scale it for 1M users, I would redesign it using core system design principles adding proper user authentication, indexing frequently queried fields, implementing caching (like Redis), and using pagination for large datasets. I’d also optimize database queries, use load balancers, apply horizontal scaling with sharding in MongoDB, and manage sessions efficiently using cookies or tokens to ensure smooth performance at high traffic.

### 4. User Experience: How did you ensure smooth, simple UX?
**My answer:**
- I focused on keeping the UX smooth and simple by avoiding unnecessary elements and using a clean, minimal layout. To make the interface feel fast, I optimized how quickly data appears on the screen and kept interactions responsive. I also study good examples like Duolingo, whose UI feels engaging and intuitive, and I apply similar principles—clear navigation, quick feedback, and smooth animations—to ensure users stay engaged and find the app easy to use.

### 5. Improvement Vision: If you had 3 more days, what would you improve?
**My answer:**
- If I had 3 more days, I would focus on improving the UI and UX—making the interface cleaner, adding smoother interactions, and polishing the overall flow. With a bit more time (like a week), I would also integrate an AI-powered feature that suggests helpful tips or simple therapy guidance based on the user’s selected emotion, such as recommending supportive content when someone chooses “sad.”

### 6. (NEW) Deployment Steps: List a clear, step-by-step guide to deploy both frontend & backend.
**My answer:**
- To deploy the project, I would use a monorepo setup so both frontend and backend stay organized in a single GitHub repository. The React frontend can be deployed easily on Vercel by connecting the repo and selecting the frontend folder. For the Node.js backend, I would use Render for hosting the API, though the free tier sleeps after 15 minutes—so I can pair it with a free uptime monitor to keep it active. Once deployed, I would update the frontend environment variables with the live backend API URL to ensure both services work together smoothly.
---

## Live Deployment

**Frontend:** https://emotional-journal-chi.vercel.app/

**Backend:** https://emotional-journal-5xs6.onrender.com

---

## Deployment

### Deploy Backend (Render)
```bash
cd backend
# Push code to GitHub first

# Go to https://render.com
# Create a new Web Service → Connect your GitHub repo
# Set Build Command:   npm install
# Set Start Command:   npm start
# Add Environment Variable:
#   KEY: MONGODB_URI
#   VALUE: <your-mongodb-url>

# Deploy and copy your backend URL
# deployed URL: https://emotional-journal-5xs6.onrender.com
```

### Deploy Frontend (Vercel)
```bash
cd frontend
npm install -g vercel
vercel
# When Vercel asks:
# ? Link to existing project → No
# ? Which folder → ./ (current)
# ? Build command → npm run build
# ? Output dir → dist

# deployed URL: https://emotional-journal-chi.vercel.app/
```

### Update Frontend API URL
Change `frontend/src/api.js`:
```javascript
export const API_URL = "https://emotional-journal-5xs6.onrender.com/api/entries";
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Entries not showing | Check browser console (F12). Verify backend on port 8000 |
| CORS error | Backend needs CORS enabled in `server.js` |
| MongoDB error | Check `.env` MONGODB_URI and ensure MongoDB is running |

---

## Project Files

```
emotional-journal/
├── backend/
│   └── src/
│       ├── server.js
│       ├── controllers/entry.controllers.js
│       ├── models/entry.model.js
│       └── routes/entry.routes.js
├── frontend/
│   └── src/
│       ├── App.jsx
│       ├── api.js
│       └── components/
└── README.md
```

---


