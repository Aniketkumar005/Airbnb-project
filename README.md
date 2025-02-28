# Airbnb Clone Project 🏠

This is a full-stack **Airbnb clone** application built with **Node.js**, **Express**, **MongoDB**, and **Bootstrap**. It allows users to list properties, search for listings, and leave reviews. The project also includes a basic implementation of authentication using **Passport.js**.

## 🚀 Live Demo  
👉 **[Live Airbnb clone](https://airbnb-project-production-25b8.up.railway.app/)**  

---

## Features ✨

- **User Authentication**: Users can sign up, log in, and log out.
- **Listing Management**: Users can create, edit, and delete listings.
- **Reviews**: Users can leave reviews on listings.
- **Dark Mode**: The application supports a dark mode toggle.
- **Responsive Design**: The app is mobile-friendly, designed using **Bootstrap**.

## Technologies Used 🛠️

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: Passport.js
- **File Storage**: Cloudinary for image uploads
- **Frontend**: HTML, CSS, JavaScript, Bootstrap 5, FontAwesome
- **Environment Variables**: For sensitive data like API keys, MongoDB URI, etc.

## Installation 🧰

### Prerequisites 📋

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended version: LTS)
- [MongoDB](https://www.mongodb.com/) (or use MongoDB Atlas for cloud database)

### Steps to Run Locally 🖥️

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Aniketkumar005/Airbnb-project.git
 
2.**Navigate to the project directory**:
  ```bash
   cd airbnb-clone
  ```

3.**Install dependencies**:
  ```bash
   npm install
  ```

4.**Set up environment variables**:

  • Create a .env file in the root directory of the project.

 • Add the following environment variables (modify with your actual credentials):

  ```bash

MONGO_URL=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_API_SECRET=your_cloudinary_api_secret

MAP_TOKEN=your_mapbox_access_token

SESSION_SECRET=your_secret_key
  ```

5.**Start the server**:
   ```bash
   npm start
  ```
This will start the server http://localhost:3000.




## Deployment 🌐
If you want to deploy this project, you can follow these steps for deploying on Render, Heroku, or any other cloud platform.

## Deploy on Render: 🧪

1. Go to Render Dashboard and create a new web service.
2. Connect to your GitHub repository.
3. Set up environment variables in Render’s settings.
4. Deploy the project.


## Usage 🛞

1. Visit the home page to explore the available listings.
2. You can sign up or log in to add your own listings.
3. Leave reviews for listings and manage your own listings if you're logged in.


## Contributing 🤝

Feel free to fork this repository and submit pull requests. Contributions are welcome!


## License 📜

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/). 


## Acknowledgments 🙌

1. Thanks to Bootstrap for the responsive layout and Font Awesome for icons.
2. Special thanks to MongoDB Atlas for providing a cloud database solution and Cloudinary for file storage.
