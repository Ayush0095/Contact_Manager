const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//Whenever we interact with mongo db we recieve a promise.

//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Create New contact
//@route POST /api/contacts
//@access Public

const createContact = asyncHandler(async(req, res) => {
    const { name, email, phone } = req.body;

    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("Please fill all the fields");
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(201).json(contact);
});

//@desc get individual contact
//@route GET /api/contacts/:id
//@access Public

const getContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(202).json(contact);
});

//@desc Update Contact
//@route PUT /api/contacts
//@access Public

const updateContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true, // returns the updated document
        });
    res.status(200).json(updatedContact);
});

//@desc Delete Contact
//@route DELETE /api/contacts/:id
//@access Public

const deleteContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await contact.deleteOne();
    res.status(200).json(contact);
});
module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};