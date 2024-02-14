const  express = require('express');
const {getContacts, postContacts, createContact, updateContact, deleteContact} = require("../controller/contactController")

const router = express.Router();

router.route('/').get(getContacts).post(postContacts)

router.route('/:id').post(createContact).put(updateContact).delete(deleteContact)

module.exports = router;