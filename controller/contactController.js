//@desc Get Contact
//@route Get /api/contacts
//@access public
const getContacts = (req, res)=>{
    res.status(200).json({"message":'Get all contacts from controller'});
}

//@desc Post Contact
//@route Post /api/contacts
//@access public
const postContacts = (req, res)=>{
    res.status(200).json({"message":`Post Without Id, ${req.params.id}`});
};

//@desc Post Contact
//@route Post /api/contacts
//@access public
const createContact = (req, res)=>{
    res.status(200).json({"message":`Post with Id, ${req.params.id}`});
};

//@desc Put Contact
//@route Put /api/contacts
//@access public
const updateContact = (req, res)=>{
    console.log(`The body is : ${req.body['email']}`);
    res.status(200).json({"message":`Put with Id, ${req.params.id}`});
};

//@desc Delete Contact
//@route Delete /api/contacts
//@access public
const deleteContact = (req, res)=>{
    res.status(200).json({"message":`Delete with Id, ${req.params.id}`});
};

module.exports = {getContacts, postContacts, createContact, updateContact, deleteContact};