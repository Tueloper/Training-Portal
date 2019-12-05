const express = require('express');
const router = new express.Router();
const admin_controller = require('../controllers/AdminInterestArea');
const { isAdmin } = require('../middleware/AdminAuth');

//adding interest areas for users
router.post('/admin/add-interest-area', isAdmin, admin_controller.add_interest_area);

//interest areas edit
router.put('/admin/interest-area/edit', isAdmin, admin_controller.update_interest_area);

//delete interest areas for users
router.delete('/admin/utlity/apiInt/delete', isAdmin, admin_controller.delete_interest_area);

//get admin interest-areas
router.get('/admin-interest-areas', isAdmin, admin_controller.get_interest_area);

module.exports = router;