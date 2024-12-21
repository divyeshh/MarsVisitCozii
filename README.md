
# Mars Visit Application Form

This project is a multi-step form designed for individuals interested in applying for a trip to Mars. The form collects important details from applicants across three stages:

1. **Personal Information**
2. **Travel Preferences**
3. **Health and Safety**

The aim of this application is to provide a clean, visually appealing, and user-friendly interface. It includes validation to ensure all data entered is accurate and complete.

## Live Demo

You can try out the live version of the form hosted on Netlify [here](https://adorable-crumble-1f790a.netlify.app/).

## Project Structure

The application is organized as a React project with the following key components:

- **PersonalInfo.js**: Manages the Personal Information stage.
- **TravelPreferences.js**: Handles the Travel Preferences stage.
- **HealthSafety.js**: Manages the Health and Safety stage.
- **Header.js**: Displays the header section of the application.
- **Footer.js**: A sticky footer that remains at the bottom of the page.
- **CustomModal.js**: A modal component that shows a success message upon form submission.

## Features

- **Form Validation**: Ensures all fields are completed correctly, including email, phone number, and date formats.
- **Navigation**: Users can easily move between stages to review or adjust their information.
- **Responsive Design**: The form adapts to different screen sizes with a Mars-themed color scheme.
- **Custom Modal**: A success modal is shown after the form is submitted.
- **Bootstrap Integration**: Bootstrap is used for consistent and responsive design across the application.

## Running the Project Locally

Follow the steps below to run this project on your local machine:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/oleksandra-o/mars-visit-application.git
   cd mars-visit-application
   ```

2. **Install the necessary dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).

## Project Setup

This project was initialized using **Create React App**.

### Available Scripts

In the project directory, you can run the following commands:

- `npm start`: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload automatically on code changes.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run build`: Builds the app for production. The output will be in the `build` folder, optimized for the best performance.
- `npm run eject`: This will remove the default build tool and configuration. Be cautious as this operation cannot be undone.

### Deployment

This project is deployed on **Netlify**. Once the app is built using `npm run build`, it is ready for deployment on Netlify or any other platform of your choice. For more details, refer to the official React documentation for deployment options.

