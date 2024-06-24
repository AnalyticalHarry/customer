// src/server.js

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const connectDB = require("./db");
const { saveCustomerData } = require("./controllers/customerController");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "../public")));

// Example API route to save customer data
app.post("/api/saveCustomer", async (req, res) => {
  const customerData = req.body;

  try {
    const result = await saveCustomerData(customerData);
    res.status(201).json({
      message: "Customer data saved successfully",
      customerId: result._id
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Connect to MongoDB Atlas and start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error starting server:", err);
  });
