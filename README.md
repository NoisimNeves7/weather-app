# Weather App

This Weather App is designed to provide users with real-time weather information based on their location or city search. With dynamic backgrounds reflecting current weather conditions and a 7-day forecast feature, users can stay informed about the weather no matter where they are.

## Features

- **Location Access:** Upon starting the app, users are prompted to grant location access. If granted, the app retrieves the user's longitude and latitude to fetch the local weather. If denied, users can still manually search for their city.
  
- **City Search:** Users can search for any city using the search bar, with autocomplete suggestions making it easier to find the desired location.

- **Dynamic Background:** The background of the website changes dynamically based on the current weather conditions of the selected city, providing users with a visual representation of the weather.

- **7-Day Forecast:** The app displays a forecast for the next 7 days, ensuring users are prepared for upcoming weather changes.

## Technologies Used

- **Frontend:** Developed using Vite and styled with Tailwind CSS for a modern and responsive design.

- **API Integration:** Utilizes two APIs:
  - One for fetching city names and obtaining longitude and latitude based on user input.
  - Another for retrieving real-time weather data based on the provided latitude and longitude.

- **Data Fetching:** Axios is used for efficient data fetching, ensuring smooth performance and timely updates.

## Responsive Design

The Weather App is designed to be responsive, providing a seamless experience across both mobile and desktop devices. Whether you're accessing the app from your smartphone or computer, you can expect consistent functionality and user interface optimization.

## Setup Instructions

1. **Clone the Repository:** Download or clone the project from GitHub.

2. **Install Dependencies:** Navigate to the project directory and run `npm install` to install the necessary Node modules.

3. **Start the Development Server:** Execute `npm run dev` to start the development server.

4. **Access the App:** Once the server is running, access the app via the provided local or network URL.

## Getting Started

To get started with the Weather App, follow the setup instructions above. Once the app is up and running, explore its features by either allowing location access for automatic weather updates or by manually searching for cities of interest.

## Live Demo

Explore the live demo of the Weather App [here](https://weather-app-fawn-zeta-11.vercel.app/). Experience the app's functionality without the need to download or set it up locally. 





---

Thank you for choosing the Weather App! Stay informed and stay safe. If you have any further questions or feedback, don't hesitate to reach out.
