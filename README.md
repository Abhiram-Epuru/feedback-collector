# Feedback Collector App

A simple feedback collection platform where users can submit their feedback via a form 
and view the feedback collected.

## Table of Contents
1.Project Description
2.Tech Stack
3.Features
4.Deployment
5.How to Run Locally
6.Screenshots
7.Contributors
8.License
   
## 1.Project Description
The Feedback Collector App is a full-stack application that allows users to submit their feedback through a form. The feedback is then displayed in a list on the app's front-end.
This project uses React for the front-end and a back-end deployed on Render to store and retrieve feedback data.
The frontend is built using React and styled with Tailwind CSS.
The backend, built with Express.js, handles feedback submission and retrieval.

## 2.Tech Stack
Frontend: React, Tailwind CSS, Vite
Backend: Node.js, Express.js
Hosting:
Frontend: Render
Backend: Render

## 3.Features
User Feedback Submission: Users can submit feedback through a simple form.
View Feedback: All collected feedback can be viewed in a list.
Responsive Design: The app is fully responsive, providing a seamless experience across different screen sizes.

## 4.Deployment Steps
### Frontend & Backend Deployment on Render
1. **Push your code** to a GitHub repository.
2. Go to [Render](https://render.com/), log in, and create a **new web service**.
3. Choose **Node.js** as the environment for both frontend and backend.
4. Connect your **GitHub repository** and select the appropriate directory (one for frontend and one for backend).
5. Set up your **environment variables** for the backend, such as `MONGODB_URI`, on Render's dashboard.
6. Deploy both the frontend and backend, ensuring they are reachable from each other.
   - **Frontend** URL: [https://feedback-collector-frontend-cg5d.onrender.com](https://feedback-collector-frontend-cg5d.onrender.com)
   - **Backend** URL: [https://feedback-collector-backend-i6hz.onrender.com](https://feedback-collector-backend-i6hz.onrender.com)
  
## 5.How to Run Locally
To run the project locally, follow these steps:

1.Clone the Repository:
bash
Copy
Edit
git clone https://github.com/abhiram/feedback-collector.git
cd feedback-collector

Frontend Setup:
Go to the frontend directory:
bash
Copy
Edit
cd frontend
Install dependencies:
bash
Copy
Edit
npm install
Run the development server:
bash
Copy
Edit
npm run dev
Open your browser and visit http://localhost:3000 to see the frontend running.

Backend Setup:
The backend is already deployed on Render. But to run it locally:
bash
Copy
Edit
cd backend
npm install
npm run dev


## 6.Screenshots
### 1. Feedback Form
Here's a screenshot of the feedback submission form where users can provide their feedback.
![Screenshot (307)i](https://github.com/user-attachments/assets/cc554fd3-4e8b-4116-ac4b-42cb9df94de4)
### 2. Feedback List
This screenshot shows the feedback that has been collected and displayed in the list view.
![Screenshot (309)i](https://github.com/user-attachments/assets/ea5bf438-d982-4643-8c3e-333dccfc16bf)


## 7.contributor
Abhiram Epuru

## 8.License
This project is not licensed. Feel free to fork and modify the code, but use it at your own risk.

