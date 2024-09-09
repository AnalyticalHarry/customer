# Customer Details Collection System

Video: https://www.tiktok.com/@analyticalharry/photo/7384131067831192864

This project involves creating a system to collect and store customer details using a combination of MongoDB, HTML, CSS, JavaScript, and Node.js. The system provides a user-friendly form for data entry and saves the collected data to a MongoDB database via a Node.js server.

## Technologies Used

- **MongoDB**: A NoSQL database used for storing customer data.
- **HTML**: Provides the structure of the web form for data entry.
- **CSS**: Styles the web form to improve user experience.
- **JavaScript**: Handles form submission and data validation on the client side.
- **Node.js**: Manages server-side logic and data handling.

## System Components

1. **Front-End (Client-Side)**
   - **HTML**: Defines the structure of the customer data entry form.
   - **CSS**: Applies styling to the form elements to ensure a visually appealing and user-friendly interface.
   - **JavaScript**: Implements the logic for handling form submission, including data collection and sending the data to the server.

2. **Back-End (Server-Side)**
   - **Node.js**: Handles HTTP requests and responses, processes the incoming customer data, and interacts with MongoDB to store the data.

3. **Database**
   - **MongoDB**: Stores customer information, including personal details and contact information.

## Features

- **Customer Data Form**: A web form for collecting customer details including:
  - First Name
  - Last Name
  - Date of Birth
  - Street Address
  - City
  - State
  - Postal Code
  - Phone Number (with type)

- **Form Handling**:
  - Form data is collected using JavaScript.
  - Data is validated and formatted before sending to the server.

- **Server Interaction**:
  - Uses `fetch` API to send data from the client to the server.
  - Handles server responses to provide feedback to the user.

### Getting Started

Setup: Ensure you have Node.js and MongoDB installed on your machine.

Install Dependencies: Run npm install to install required packages.

Start Server: Use node server.js to start the Node.js server.

Access the Form: Open the web form in your browser and enter customer details.

Check Database: Verify that the customer data is stored in MongoDB.

### Author : Hemant Thapa

### Email : hemantthapa1998@gmail.com
