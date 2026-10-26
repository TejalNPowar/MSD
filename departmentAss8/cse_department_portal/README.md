# CSE Department Portal

A fully working CSE department website + role-based portal built with React, Vite, Express and SQLite.

## Features
- Public department website
- Student, Faculty and Admin login
- Role-based dashboards
- Notices CRUD
- Events CRUD + student registration
- Faculty directory
- Courses/resources
- Projects and achievements
- Placement statistics
- Search across portal content
- Responsive UI
- SQLite database with automatic seed data
- REST API

## Demo accounts
- Admin: admin@cse.edu / admin123
- Faculty: faculty@cse.edu / faculty123
- Student: student@cse.edu / student123

## Run

Requirements: Node.js 18+

### 1. Install
```bash
npm install
npm run install-all
```

### 2. Start development servers
```bash
npm run dev
```

Frontend: http://localhost:5173
Backend: http://localhost:5000

The backend creates `server/data/cse.db` automatically on first start.

## Production build
```bash
npm run build
npm start
```
