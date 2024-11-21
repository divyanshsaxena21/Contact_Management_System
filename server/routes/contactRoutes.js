const express = require('express');
const router = express.Router();
const {
    createContact,
    getContacts,
    updateContact,
    deleteContact,
    getContactByEmail,
} = require('../controllers/contactController');

// POST /contacts: Create a new contact
router.post('/', createContact);

// GET /contacts: Retrieve all contacts
router.get('/', getContacts);

router.get('/:email', getContactByEmail);

// PUT /contacts/:email: Update a specific contact by email
router.put('/:email', updateContact);

// DELETE /contacts/:email: Delete a specific contact by email
router.delete('/:email', deleteContact);

module.exports = router;