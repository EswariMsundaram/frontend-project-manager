Full-Stack MERN App
A simple Project & Task Management App built using the MERN stack:
•	MongoDB (database)
•	Express.js (backend framework)
•	React + Vite + TypeScript (frontend)
•	Node.js (runtime)
Users can register, log in, create projects, update, delete and view tasks for each project.
This project is built to be beginner-friendly, with clean code and simple steps.
 
🚀 Features
Authentication
•	Register new users
•	Log in existing users
•	JWT-based auth
•	Protected routes
•	Logout button
Projects
•	Create a project
•	View all your projects
•	Update and Delete projects
•	View project details
•	Uses protected API routes
Tasks
•	Creates new task with optional status change
•	View all Task
 
 
🛠️ Technologies Used
Frontend
•	React
•	TypeScript
•	React Router DOM
•	Axios
•	TailwindCSS 
•	Context API
Backend
•	Node.js
•	Express.js
•	MongoDB / Mongoose
•	JWT Authentication
•	Bcrypt (password hashing)
📂 Project Structure
Frontend/
│── src/
│   │── App.tsx
│   │── main.tsx
│   │── index.css
│   │
│   ├── clients/
│   │   └── api.ts
│   │
│   ├── context/
│   │   └── AuthProvider.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── ProtectedRoute.tsx
│   │
│   ├── pages/ 
│   │   ├── HomePage.tsx
│   │   ├── AuthPage.tsx
│   │   ├── CreateTaskPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   └── ProjectDetailsPage.tsx
│
│   ├── types/ 
│   │   ├── index.ts
│── .env
│── package.json
│── README.md

Backend/
│   │
│   ├── controllers/
│   │   └── userController.js
│   │
│   ├── middlewares/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── Project.js
│   │   └── Task.js
│   │.  └── User.js
│   ├── routes/ 
│   │   ├── projectRoutes.js
│   │   ├── taskRoutes.js
│   │   ├── userRoutes.js
│── node_modules
│── config
│── .env
│── package.json
│── gitignore
<img width="468" height="263" alt="image" src="https://github.com/user-attachments/assets/aeff8e29-f74f-4393-8ebf-91992a71e332" />




 
⚙️ Installation & Setup
1. Clone the Repository
git clone <https://github.com/EswariMsundaram/frontend-project-manager.git>
cd mern-project-frontend
 
📌 Backend Setup
2. Install backend dependencies
cd backend
npm install

3. Create .env file
Inside /backend:
MONGO_URI=mongodb://127.0.0.1:27017/project-manager
JWT_SECRET=your_jwt_secret
PORT=4000
4. Start backend
npm start
Backend runs at:
http://localhost:4000
 
📌 Frontend Setup
5. Install frontend dependencies
Go to frontend folder:
cd frontend
npm install
6. Create a .env file
Inside /frontend:
VITE_BACKEND_URL=http://localhost:4000
Make sure this matches your backend URL.
7. Run the frontend
npm run dev
Frontend runs at something like:
http://localhost:5173
 

🔐 Authentication Flow (How It Works)
1.	User registers or logs in
2.	Backend returns { user, token }
3.	Frontend stores user & token in localStorage
4.	Axios interceptor attaches
5.	Authorization: Bearer <token>
6.	Protected routes check if AuthContext.user exists
7.	User can access:
o	/projects
o	/projects/:projectId
If not logged in → redirected to /auth.
 
📡 API Endpoints (Backend)
Auth
Method	Endpoint	Description
POST	/api/users/register	Register a new user
POST	/api/users/login	Login and get JWT
Projects
Method	Endpoint	Description
GET	/api/projects	Get all projects for user
POST	/api/projects	Create new project
GET	/api/projects/:id	Get project details
PUT	/api/projects/:id	Update project details
DELETE	/api/projects/:id	Delete project 
		
Tasks
Method	Endpoint	Description
GET	/api/projects/:projectId/tasks	Get tasks for project
POST	/api/projects/:projectId/tasks	Create tasks for project
 
🧪 Testing With Postman
•	Register: POST /api/users/register
•	Login: POST /api/users/login
•	Test a protected route with a valid token.
 
🎯 Future Improvements
Features you can add later:
•	Edit and Delete Tasks
•	User profile page
•	Home Page Improvements

<img width="468" height="579" alt="image" src="https://github.com/user-attachments/assets/4326b322-7924-44a2-a603-26924dceb79c" />
