# Swimlane Dashboard

This project is a scalable **Kanban-style Task Board** built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Zustand** for state management. It features a drag-and-drop task board, search, avatars, notifications, and responsive layout optimized for enterprise use.

---

## Table of Contents

-   [Features](#features)
-   [Technologies](#technologies)
-   [Folder Structure](#folder-structure)
-   [Setup & Installation](#setup--installation)
-   [Usage](#usage)
-   [Contribution](#contribution)
-   [License](#license)

---

## Features

-   **Task Board** with multiple columns (`To Do`, `In Progress`, `Approved`, `Rejected`)
-   **Drag-and-Drop** support using `@dnd-kit/core` and `@dnd-kit/sortable`
-   **Search Tasks** with real-time filtering
-   **User Avatars** with fallback initials for missing images
-   **Responsive Layout** with horizontal scroll for columns
-   **Task Details**: Comments, attachments, due dates, priority, and category
-   **Collapsible Sidebar** with nested menu items
-   **Persistent State** using `Zustand` and optional `localStorage`

---

## Technologies

-   **Next.js 14+** – React framework for server-side rendering & static generation
-   **TypeScript** – Strict typing for scalability
-   **Tailwind CSS** – Utility-first styling
-   **Zustand** – Lightweight state management
-   **@dnd-kit/core** & **@dnd-kit/sortable** – Drag-and-drop system
-   **Next/Image** – Optimized image handling
-   **clsx** – Conditional className utility
-   **React Icons / Custom Icons** – BaseIcon components for consistency
