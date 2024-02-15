const express = require('express');
const { getAllContacts, getContact, createNewContact, createContactwithId, updateContact, deleteContact } = require("../controller/contactController")

const router = express.Router();

router.route('/').get(getAllContacts).post(createNewContact)

router.route('/:id').get(getContact).post(createContactwithId).put(updateContact).delete(deleteContact)

module.exports = router;