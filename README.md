# Prakash – Personal Portfolio Website

A modern, responsive personal portfolio website built to showcase my skills, projects, and contact information as a Java Full Stack Developer aspirant.

**Live Demo:** https://future-fs-01-g04kwqrtq-dpllabs.vercel.app/

## About the Project

This portfolio website presents my technical skills, development projects, and professional profile. It also includes a contact form that allows visitors to send messages directly.

## Technologies Used

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Vite

### Backend
- Java
- Spring Boot
- REST API
- Maven

### Database and Services
- MySQL-compatible TiDB Cloud
- Resend for email notifications

### Deployment
- Vercel – Frontend hosting
- Render – Backend hosting
- TiDB Cloud – Database hosting

## Features

- Responsive portfolio design
- About Me section
- Technical Skills section
- Projects showcase
- Contact form
- Backend API integration
- Contact message storage in database
- Email notifications

## Project Structure

```text
prakash-portfolio/
├── portfolio-frontend/
│   ├── src/
│   │   ├── sections/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
│
├── portfolio-backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       └── resources/
│   ├── Dockerfile
│   └── pom.xml
│
└── README.md
```

## Run Locally

### Prerequisites

- Node.js and npm
- Java 25 or compatible configured project JDK
- MySQL server
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Prakashsv-19/FUTURE_FS_01.git
cd FUTURE_FS_01
```

### 2. Start the Backend

Configure your local database and application properties.

Navigate to the backend:

```bash
cd portfolio-backend
```

Run the application:

```bash
./mvnw spring-boot:run
```

On Windows PowerShell:

```powershell
.\mvnw.cmd spring-boot:run
```

The backend runs on port 8080 by default.

### 3. Start the Frontend

Open another terminal:

```bash
cd portfolio-frontend
npm install
```

Create a `.env` file in the frontend folder:

```env
VITE_API_BASE_URL=http://localhost:8080
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173`.

## Environment Variables

Configure the required environment variables in your local environment or hosting provider.

| Variable | Purpose |
|---|---|
| `VITE_API_BASE_URL` | Backend API base URL |
| `TIDB_HOST` | TiDB database host |
| `TIDB_PORT` | Database port |
| `TIDB_DATABASE` | Database name |
| `TIDB_USERNAME` | Database username |
| `TIDB_PASSWORD` | Database password |
| `RESEND_API_KEY` | Email notification API key |

**Important:** Never commit passwords, API keys, or other secret credentials to GitHub.

## Deployment

- Frontend: Vercel
- Backend: Render
- Database: TiDB Cloud

## Author

**Prakash S.**

B.Tech – Information Technology  
University College of Engineering, Tiruchirappalli

GitHub: https://github.com/Prakashsv-19

---

*Built as part of the Future Interns Full Stack Web Development Internship Task 1.*