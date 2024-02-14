//@desc Get Contact
//@route Get /api/contacts
//@access public
const getContacts = (req, res)=>{
    res.status(200).json({"message":'Get all contacts from controller'});
}

//@desc Get Contact
//@route Get /api/contacts
//@access public
const postContact = (req, res)=>{
    res.status(200).json({"message":`Post Without Id, contact`});
};

module.exports = {getContacts, postContact};