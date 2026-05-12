```markdown
# Admin Dashboard

> Role-based admin panel built with React + Vite — no UI libraries, just clean components and real logic.

![React](https://img.shields.io/badge/React-18-61dafb?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat&logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=flat&logo=javascript)
![License](https://img.shields.io/badge/license-MIT-green?style=flat)

## Overview

Admin Dashboard is a frontend project simulating a real SaaS admin panel. It features a login system with two distinct roles — Admin and User — each with their own layout and permissions. Built entirely with React and CSS variables, no external UI libraries.

Part of a personal challenge: **20 projects in 20 days** covering Backend, Frontend, Data Science, DevOps, Security and AI.

## Features

- 🔐 **Authentication** — credential-based login with role detection
- 👑 **Admin Panel** — full CRUD (add, edit, delete) via modal forms
- 👤 **User Panel** — read-only dashboard with profile editing
- 📊 **KPI Cards** — live metrics: active users, trials, churned, MRR
- 🔍 **Filters** — search by name/email + status dropdown
- 📄 **Pagination** — 8 users per page
- 📥 **Export CSV** — download complete user list
- 🌑 **Dark Theme** — consistent design system via CSS custom properties

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Bundler | Vite 5 |
| Language | JavaScript ES6+ |
| Styling | CSS Variables (no UI lib) |
| Data | JSON mock |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Felipe-Coelho-Terossi/Admin-Dashboard.git
cd Admin-Dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Test Credentials

| Role  | Email               | Password |
|-------|---------------------|----------|
| Admin | admin@dashboard.com | admin123 |
| User  | user@dashboard.com  | user123  |

## Project Structure

```
src/
├── components/
│   ├── Filters.jsx       # Search + status dropdown
│   ├── KPICard.jsx       # Metric card component
│   ├── Modal.jsx         # Reusable modal wrapper
│   ├── Navbar.jsx        # Top navigation bar
│   ├── Pagination.jsx    # Page controls
│   └── UserTable.jsx     # Data table with optional admin actions
├── data/
│   └── users.json        # Mock dataset (30 SaaS users)
├── hooks/
│   ├── useAuth.js        # Login, logout, role management
│   └── useUsers.js       # Filtering, pagination, CRUD logic
├── pages/
│   ├── AdminDashboard.jsx
│   ├── Login.jsx
│   └── UserDashboard.jsx
├── utils/
│   └── exportCSV.js      # CSV generation and download
├── App.jsx               # Route logic based on role
└── index.css             # Global reset + CSS design system
```

## Author

**Felipe Coelho Terossi**
Computer Information Systems — Unicamp, 3rd semester

[GitHub](https://github.com/Felipe-Coelho-Terossi)
