# MovieMate

This README file provides detailed information about my project, including its frontend and backend components, routes, and the technologies used.

## Table of Contents

1. [Installation](#installation)
2. [Frontend](#frontend)
3. [Frontend Routes](#frontend-routes)
4. [Technologies Used](#technologies-used)
5. [Environment Variables](#environment-variables)
6. [Deployed Link](#deployed-link)
7. [Screenshots](#screenshots)

---

## Installation

To set up the MovieMate app locally, follow these steps:

1. Clone this repository to your local machine using the following command:

   ```shell
    git clone https://github.com/abhimistry-07/MovieMate
   ```

2. Navigate to the project directory:

   ```shell
   cd movie-mate
   ```

3. Install the required dependencies by running:

   ```shell
   npm install
   ```

4. Start the application:

   ```shell
   npm start
   ```

5. Access the platform by visiting http://localhost:3000 in your web browser.

## Frontend

The frontend of this project is built using React, a popular JavaScript library for building user interfaces. It includes features like user login, signup, search movies, sorting movies and add movies to favourite. Used styled components for CSS to create a visually appealing and responsive user interface.

### Frontend Routes

1. `/`: Home page with the movie list, featuring searching functionality.
2. `/login`: Allows users to log in using their credentials.
3. `/signup`: Provides the functionality for users to create a new account.
4. `/favorites`: Favorites page contains favourite movies.
5. `/movie/:id`: Movie details page.
6. `*`: No page found.

### Data Source

The frontend uses the OMDB API to fetch data about movies. Constants like `REACT_APP_API_KEY` and `REACT_APP_URL` are used for API requests.

---

## Technologies Used

### Frontend

- React
- Localstorage (for storing data)
- Styled Components (for CSS)

---

## Environment Variables

To configure and run the project, you need to set the following environment variables in your frontend `.env` file:

- `REACT_APP_API_KEY`: YOUR OMDB APIKEY
- `REACT_APP_URL`: OMDB URL

Make sure to set these environment variables according to your development or production environment.

---

## Deployed Link

You can access the deployed version of the project by following this link: https://movie-mate-i4ea.vercel.app/

---

## Screenshots

Below are screenshots of different pages of the Netflix_Clone website:

### 1. Home Page:

   ![Home Page](https://github.com/abhimistry-07/MovieMate/blob/main/movie-mate/src/assets/Homepage.jpg)

### 2. Searching & Sorting:

   ![Searching](https://github.com/abhimistry-07/MovieMate/blob/main/movie-mate/src/assets/Searching.jpg)

   ![Sorting](https://github.com/abhimistry-07/MovieMate/blob/main/movie-mate/src/assets/Sorting.jpg)

### 3. Login Page:

   ![Login Page](https://github.com/abhimistry-07/MovieMate/blob/main/movie-mate/src/assets/Login.jpg)

### 4. Signup Page:

   ![Signup Page](https://github.com/abhimistry-07/MovieMate/blob/main/movie-mate/src/assets/Signup.jpg)

### 5. Favorites Page:

   ![Favorites Page](https://github.com/abhimistry-07/MovieMate/blob/main/movie-mate/src/assets/Favorites.jpg)

### 6. Mobile View:

   ![Mobile View](https://github.com/abhimistry-07/MovieMate/blob/main/movie-mate/src/assets/Mobile%20View.jpg)
   
---
