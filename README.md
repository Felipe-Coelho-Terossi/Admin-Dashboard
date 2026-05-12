# Admin Dashboard

> Role-based admin panel built with React + Vite — no UI libraries, just clean components and real logic.

[![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)](LICENSE)

## Overview

Admin Dashboard is a frontend project simulating a real SaaS admin panel. It features a login system with two distinct roles — Admin and User — each with their own layout and permissions. Built entirely with React and CSS variables, no external UI libraries.

Part of a personal challenge: **20 projects in 20 days** covering Backend, Frontend, Data Science, DevOps, Security and AI.

## Features

- Authentication — credential-based login with role detection
- Admin Panel — full CRUD (add, edit, delete) via modal forms
- User Panel — read-only dashboard with profile editing
- KPI Cards — live metrics: active users, trials, churned, MRR
- Filters — search by name/email + status dropdown
- Pagination — 8 users per page
- Export CSV — download complete user list
- Dark Theme — consistent design system via CSS custom properties

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Bundler | Vite 5 |
| Language | JavaScript ES6+ |
| Styling | CSS Variables (no UI lib) |
| Data | JSON mock |

## Getting Started

Clone the repository and install dependencies:

    git clone https://github.com/Felipe-Coelho-Terossi/Admin-Dashboard.git
    cd Admin-Dashboard
    npm install
    npm run dev

Open http://localhost:5173 in your browser.

## Test Credentials

| Role  | Email               | Password |
|-------|---------------------|----------|
| Admin | admin@dashboard.com | admin123 |
| User  | user@dashboard.com  | user123  |

## Project Structure

    src/
    ├── components/
    │   ├── Filters.jsx
    │   ├── KPICard.jsx
    │   ├── Modal.jsx
    │   ├── Navbar.jsx
    │   ├── Pagination.jsx
    │   └── UserTable.jsx
    ├── data/
    │   └── users.json
    ├── hooks/
    │   ├── useAuth.js
    │   └── useUsers.js
    ├── pages/
    │   ├── AdminDashboard.jsx
    │   ├── Login.jsx
    │   └── UserDashboard.jsx
    ├── utils/
    │   └── exportCSV.js
    ├── App.jsx
    └── index.css

## Author

Felipe Coelho Terossi
Computer Information Systems — Unicamp, 3rd semester

https://github.com/Felipe-Coelho-Terossi