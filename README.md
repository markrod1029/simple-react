Task Manager (React + Laravel API)

Simple Task Manager App na may CRUD functionality.
Frontend built with React + Vite + TailwindCSS, backend gamit ang Laravel API.

⚙️ Requirements

PHP >= 8.1

Composer

Node.js & npm

MySQL / MariaDB

🔹 Backend Setup (Laravel)

Clone repo & install dependencies

composer install
cp .env.example .env
php artisan key:generate


Setup Database

Update .env with your DB credentials

Run migrations:

php artisan migrate


Serve backend

php artisan serve


Default: http://127.0.0.1:8000

🔹 Frontend Setup (React)

Go to frontend folder

cd frontend


Install dependencies

npm install


✅ Main packages used:

axios → for API requests

react-icons → for icons

tailwindcss → for styling

Run dev server

npm run dev


Default: http://localhost:5173

🔗 API Endpoints

GET /api/tasks → get all tasks

POST /api/tasks → create new task

PUT /api/tasks/{id} → update task

DELETE /api/tasks/{id} → delete task

🎨 UI Features

Add new task

Mark as complete ✅

Delete task 🗑️

TailwindCSS styling
