const  express = require('express');
const {getContacts, postContact} = require("../controller/contactController")

const router = express.Router();

router.route('/').get(getContacts).post(postContact)

router.route('/:id').post((req, res)=>{
    res.status(200).json({"message":`Create contact: ${req.params.id}`});
})

router.route('/:id').put((req, res)=>{
    res.status(200).json({"message":`Update contact: ${req.params.id}`});
})

router.route('/:id').delete((req, res)=>{
    res.status(200).json({"message":`Delete contact: ${req.params.id}`});
})

router.route('/:id').get((req, res)=>{
    res.status(200).json({"message":`Get contact: ${req.params.id}`});
})

module.exports = router;