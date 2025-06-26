
# Healthcare Appointment Booking System

This is a full-stack web application for booking healthcare appointments with role-based dashboards.

## 🔧 Stack

- **Frontend**: Angular 14 + Bootstrap 5
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Auth**: JWT-based with roles (admin, doctor, patient)

## 📦 Features

- Secure JWT authentication
- Role-based access control
- Book and manage appointments
- Responsive UI dashboards
- Preloaded roles for testing

## 🚀 Getting Started

### 1. Backend Setup

```bash
cd backend
npm install
cp .env.example .env  # Replace with your Mongo URI and JWT secret
node server.js
```

### 2. Frontend Setup

```bash
cd frontend
npm install
ng serve
```

### 3. Preloaded Users

You can register via UI or insert manually via MongoDB:
- `admin@health.com` / `password`
- `doctor@health.com` / `password`
- `patient@health.com` / `password`

## 📁 Structure

- `/backend` — Node.js API with routes, models, middleware
- `/frontend` — Angular app with Bootstrap UI

---

