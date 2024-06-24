// src/controllers/customerController.js

const Customer = require("../models/Customer");

async function saveCustomerData(customerData) {
  try {
    const customer = new Customer(customerData);
    const result = await customer.save();
    console.log("Customer data saved successfully:", result._id);
    return result;
  } catch (error) {
    console.error("Error saving customer data:", error);
    throw error;
  }
}

module.exports = { saveCustomerData };
