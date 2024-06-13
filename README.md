# BlogApp

- [Click here to view the BlogApp](https://blogapp-coral-alpha.vercel.app/)

# OverView

This repository contains the source code for a blog project implemented using React. The project includes features like user authentication, post creation, editing, and viewing. It utilizes React Router for navigation and Redux for state management.

## Project Structure

- src/components: Contains reusable React components.
- src/pages: Includes individual pages/components for different routes.
- src/store: Manages the Redux store configuration.
- src/App.jsx: Main component rendering the application layout.
- src/index.css: Stylesheet for the application.
- src/main.jsx: Entry point of the application.

## Routes

- /home: Landing page displaying the blog's home content.
- /login: Login page for user authentication.
- /create-account: Page for creating a new user account.
- /blogs: View all blog posts (protected route, requires authentication).
- /post/:slug: View a specific blog post (protected route).
- /add-post: Create a new blog post (protected route).
- /edit-post/:slug: Edit an existing blog post (protected route).
- /user/:userID: View user profile page (protected route).

## Dependencies

- React: JavaScript library for building user interfaces.
- Redux: State management library.
- React Router: Declarative routing for React.js.
- react-dom/client: ReactDOM package for client-side rendering.
- react-redux: Official Redux bindings for React.
- react-router-dom: DOM bindings for React Router.
- react-hook-form: Handle the inputs

## Getting Started 

To run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/AryanBhati7/BlogApp
```

2. Navigate to the project directory:

```bash
cd BlogApp
```

3. Install the required Node modules:

```bash
npm install
```

3. Configure Appwrite using .env.sample

4. Run the client Server

```bash
npm run dev
```

5. Go to said localhost URl on your preferred browser. For example,

```bash
localhost:5173
```

## Usage

1. **Sign Up or Log In**

   Create a new account or log in with an existing account.

2. **Create a Blog**

   Click on "Create New Blog" and start writing using the rich text editor. Add categories and tags to organize your blog.

3. **Manage Your Blogs**

   Edit or delete your blogs from your profile page.