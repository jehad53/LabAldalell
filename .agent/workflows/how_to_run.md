---
description: How to run the Clinic Management System website
---

# How to Run the Project

This project is a modern web application built with **React** and **Vite**. It cannot be run by simply double-clicking the `index.html` file in the folder. You must use a "web server" to view it.

## Option 1: Development Mode (Best for editing)
This allows you to see changes instantly as you edit the code.

1.  Open your terminal/command prompt in the project folder (`e:\LabAldalell`).
2.  Run the following command:
    ```powershell
    npm run dev
    ```
3.  Open the link shown (usually `http://localhost:5173`) in your browser.

## Option 2: Production Preview (Best for checking final result)
If you want to see exactly how the site will look to visitors:

1.  Build the project first:
    ```powershell
    npm run build
    ```
2.  Run the preview server:
    ```powershell
    npm run preview
    ```

## Option 3: Deploying to the Internet
To share the site with others, you cannot just send the folder. You need to host it.

1.  Run `npm run build`.
2.  This creates a **`dist`** folder.
3.  Upload the **contents** of the `dist` folder to any static hosting service like:
    - **Netlify** (Drag and drop the `dist` folder).
    - **Vercel**.
    - **GitHub Pages**.

> **Why can't I just open the file?**
> Modern web apps use absolute paths (like `/assets/script.js`) which require a server to understand where the "root" of the site is. When you open a file directly, the browser gets confused about where to find the other files.
