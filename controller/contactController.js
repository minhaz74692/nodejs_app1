const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel')

//@desc Get All Contact
//@route Get /api/contacts
//@access public
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Get Contact
//@route Get /api/contacts
//@access public
const getContact = asyncHandler(async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        res.status(200).json(contact);
    } catch (error) {
        res.status(404);
        throw new Error('Contact not found');
    }


});

//@desc Post Contacts
//@route Post /api/contacts
//@access public
const createNewContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name || !phone || !email) {
        res.status(400);
        throw new Error('Required credentials are missing');
    } else {
        const contact = await Contact.create(
            {
                name, email, phone,
            }
        )
        res.status(201).json(contact);
        // throw new Success('success');
    }

});

//@desc Post Contact with id
//@route Post /api/contacts
//@access public
const createContactwithId = asyncHandler(async (req, res) => {
    res.status(200).json({ "message": `Post With Id,` });

});

//@desc Put Contact
//@route Put /api/contacts
//@access public
const updateContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const contact = await Contact.findById(req.params.id);
        // res.status(200).json(contact);
    } catch (error) {
        res.status(404);
        throw new Error('Contact not found');
    }

    try {
        // const contact = await Contact.findById(req.params.id);
        const updatedContact = Contact.findByIdAndUpdate(req.params.id, req.body, { new: true },
        );
        res.status(201).json(updatedContact);
    } catch (error) {
        res.status(404);
        throw new Error('Contact not found');
    }

});

//@desc Delete Contact
//@route Delete /api/contacts
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ "message": `Delete with Id, ${req.params.id}` });
});

module.exports = { getAllContacts, getContact, createNewContact, createContactwithId, updateContact, deleteContact };