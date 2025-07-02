const express = require("express");
const router = express.Router();

// Importing the controller function
const {getContacts,createContact,getContact,updateContact,deleteContact} = require("../controllers/contactController");

// Defining the routes for contacts
router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;