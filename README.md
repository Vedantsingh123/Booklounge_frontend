# BookLounge

**BookLounge** is a **full-stack MERN** (MongoDB, Express.js, React.js, Node.js) application designed to provide an online book purchasing platform. Users can browse and purchase books, while admins can manage the inventory of books. The website includes features such as user authentication, cart management, and favorites, with a fully responsive design for an optimized experience on all devices.

This application makes use of **Redux** for global state management, handling user authentication across different pages. The project also utilizes **Tailwind CSS** for modern and responsive styling.

The website is **fully responsive**, making it easy to navigate on desktops, tablets, and mobile devices.

## Live Demo

You can view the live version of **BookLounge** here:

[**BookLounge Live Demo**](https://booklounge-netlify.netlify.app/)

## Backend Repository

The backend for this project is hosted in a separate repository. You can find it here:

[**BookLounge Backend Repository**](https://github.com/Vedantsingh123/Booklounge_backend)

## Technologies Used

- **Frontend:**
  - **HTML** for basic structure
  - **CSS** and **Tailwind CSS** for styling and responsive layout
  - **JavaScript** for dynamic interactions
  - **React.js** for building the user interface
  - **Redux** for state management, specifically for user authentication

- **Backend:**
  - **Node.js** for server-side JavaScript
  - **Express.js** for building the backend APIs
  - **MongoDB** for storing user and book data in a NoSQL database
  - **JWT** for user authentication and authorization
  - **Bcryptjs** for securely hashing passwords

## Features

### **User Features**
- **User Registration and Login**: New users can sign up and existing users can log in using their credentials. Authentication is managed via **Redux** and **JWT**.
- **Browse Books**: Users can view a list of books, with search and filter functionality.
- **Add Books to Cart**: Users can add books to their shopping cart to review and purchase later.
- **Favorite Books**: Users can mark their favorite books and revisit them later.
- **Place Orders**: Users can place orders for the books in their cart.
- **Update Profile**: Users can update their personal information such as name, email, and password.

### **User Profile**
The **User Profile** section provides a personalized experience for users, including the following features:

- **Favorite Books**: Users can view all the books they have marked as favorites. This section lists the books they like the most, making it easier to access them for future purchases.
  
- **Order History**: Users can view a detailed list of all the orders they have placed, along with the **total amount** spent for each order. This section includes:
  - A list of all placed orders.
  - The total price for each order (in **INR**).
  
- **Settings**: Users can update their personal information such as:
  - **Username**: Change the display name.
  - **Email**: Update their registered email address.
  - **Address**: Update the shipping address for deliveries.

### **Admin Features**
- **Add, Update, or Delete Books**: Admins have full control over the book inventory. They can add new books, update existing book details, and delete books.
- **User Management**: Admins can view and manage registered users, including deleting users when necessary.

### **Responsive Design**
- The website is **fully responsive**. It adapts seamlessly to various screen sizes and devices (desktops, tablets, and mobile phones).
- **Tailwind CSS** ensures that all pages and elements on the website scale correctly across different screen sizes.
- For mobile devices, the navigation is simplified into a collapsible hamburger menu, ensuring that the user experience remains consistent on smaller screens.
- The homepage and all other pages, such as the **Book List** and **Cart**, are optimized for touch interactions on mobile devices.

### **Pages and Functionality**
- **Home Page**: Displays a collection of books available for purchase. The layout is responsive, with a clean grid or list layout on desktops and a more compact, mobile-friendly view on small screens.
  
- **All Books Page**: A listing of all available books with the ability to search, filter by genre, and view book details. The page adjusts dynamically based on the device width.
  
- **Login/Signup Page**: Allows users to log in with existing credentials or sign up as new users. The forms are styled for easy use on both large and small screens.
  
- **Cart Page**: Users can view their cart items and manage quantities. The cart is fully responsive, adjusting the layout for smaller screens.
  
- **Profile Page**: 
  - **Favorite Books**: Displays a list of books the user has marked as favorites.
  - **Order History**: Shows a history of all placed orders, with total prices.
  - **Settings**: Allows users to update their username, email, and address. 
  - The page adjusts the layout for smaller devices, ensuring ease of use on phones and tablets.

- **Admin Panel**: Accessible only by admin users, this page allows for managing books and users. It is also optimized for mobile, with collapsible sections and responsive tables.

## Installation

To set up **BookLounge** on your local machine, follow these steps:

### 1. Clone the repositories

- **Frontend Repository**: Clone the frontend repository first:

```bash
git clone https://github.com/your-username/booklounge-frontend.git
cd booklounge-frontend

