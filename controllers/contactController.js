//@desc Get all contacts
//@route GET /api/contacts
//@access Public

const getContacts = (req, res) => {
    res.status(200).json({ message: "Get all Contacts" });
};

//@desc Create New contact
//@route POST /api/contacts
//@access Public

const createContact = (req, res) => {
    const { name, email, phone } = req.body;

    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("Please fill all the fields");
    }
    res.status(201).json({ message: "Create Contact" });
};

//@desc get individual contact
//@route GET /api/contacts/:id
//@access Public

const getContact = (req,res)=>{
    res.status(202).json({message:`Get Contact with ID ${req.params.id}`});
}

//@desc Update Contact
//@route PUT /api/contacts
//@access Public

const updateContact = (req,res)=>{
    res.status(200).json({message:`Update Contact with ID ${req.params.id}`});
}

//@desc Delete Contact
//@route DELETE /api/contacts/:id
//@access Public

const deleteContact = (req,res)=>{
    res.status(200).json({message:`Delete Contact with ID ${req.params.id}`});
}
module.exports = {getContacts,createContact,getContact,updateContact,deleteContact};