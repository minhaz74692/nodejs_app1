const express = require('express');
const { getAllContacts, getContact, createNewContact, createContactwithId, updateContact, deleteContact } = require("../controller/contactController")

const router = express.Router();

router.route('/').get(getAllContacts).post(createNewContact)

router.route('/:id').get(getContact).post(createContactwithId).delete(deleteContact)
router.route("/:id").put(updateContact);
module.exports = router;