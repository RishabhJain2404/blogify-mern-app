# Blogify: A Full-Stack MERN Blog Application

**Welcome to Blogify!**

**Live Demo:** [Link to my deployed project](https://blogify-mern-app.onrender.com/)

This project demonstrates a full-stack blog application built with the MERN stack (MongoDB, Express, React, Node.js). It boasts a user-friendly interface, robust functionalities, and secure user management. 

![home](https://github.com/RishabhJain2404/blogify-mern-app/assets/127675963/6b489d07-e437-46fd-b8e0-e1a3b4b12340)

This README will guide you through the key features and functionalities of Blogify:

## Project Structure

* `client`: Contains the React frontend codebase for the application.
* `server`: Houses the Node.js backend code responsible for server-side logic and API endpoints.


## Navigating Blogify

### 1. **Home Page:**

![home](https://github.com/RishabhJain2404/blogify-mern-app/assets/127675963/6b489d07-e437-46fd-b8e0-e1a3b4b12340)

The home page serves as the main entry point for users. It typically displays a list of recent blog posts, along with navigation options to access other sections of the application.

### 2. **Admin Dashboard:**

![admin dashboard](https://github.com/RishabhJain2404/blogify-mern-app/assets/127675963/1aa4730c-56d8-4154-b052-1281d9777272)

This section is accessible only to authorized users with admin privileges.

The admin dashboard provides functionalities for managing users, posts, and comments. This includes functionalities like viewing, editing, and deleting data.

### 3. **Sign Up:**

![sign up](https://github.com/RishabhJain2404/blogify-mern-app/assets/127675963/2bd89955-1784-404d-955b-00be95086768)

Users can create new accounts for signing up. This section should include functionalities for both email/password and Google OAuth login.

### 4. **Sign In:**

![sign in](https://github.com/RishabhJain2404/blogify-mern-app/assets/127675963/229c9856-1726-4fae-880e-7b341d508e89)

Users can sign in using their existing credentials. This section should include functionalities for both email/password and Google OAuth login.

### 5. **Create Post:**

![create post](https://github.com/RishabhJain2404/blogify-mern-app/assets/127675963/fce79afc-4fb8-4f90-b367-ac248c2659a8)

This section is accessible only to authenticated users.

Here, users can create new blog posts by providing a title, image, content, and potentially adding categories or tags.

### 6. **Update Post:**

![update post](https://github.com/RishabhJain2404/blogify-mern-app/assets/127675963/6058276a-e503-4a31-b09b-896429592732)

This section is accessible only to authenticated users and only for posts the user created.

Users can edit existing blog posts by modifying the title, image, content, or associated categories/tags.

### 7. **Search:**

![search](https://github.com/RishabhJain2404/blogify-mern-app/assets/127675963/cdffcf1b-b5e2-4035-b0ad-ef8e12cf3f4f)

The search functionality allows users to find specific blog posts based on keywords or criteria. You can highlight the advanced search features like filtering and sorting capabilities here.

### 8. **Post Details:**

![post details](https://github.com/RishabhJain2404/blogify-mern-app/assets/127675963/e7807289-656c-4726-ad49-199968a3d45f)

This page displays the details of an individual blog post, including the title, image, content, date, mins of read and potentially comments and likes from other users.


## Getting Started

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/](https://github.com/)<your-username>/blogify.git


2. **Install dependencies:**

   ```bash
   cd blogify
   npm install

3. **Configure environment variables:**

Create a `.env` file in the project root directory and add the following variables (replace with your actual values):

  
    MONGODB_URI=mongodb://localhost:27017/<your-database-name>
    JWT_SECRET=<your-jwt-secret>
    GOOGLE_CLIENT_ID=<your-google-client-id>
    GOOGLE_CLIENT_SECRET=<your-google-client-secret>

4. **Run the application:**

    ```bash
    npm start

This will start the development server on `http://localhost:3000` by default.


## Deployment


You can deploy the application to a hosting platform of your choice. Refer to the platform's documentation for specific deployment instructions.
