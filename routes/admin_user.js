var express = require('express');
var router = new express.Router();
const Admin = require('../models/admin');
const { isAdmin } = require('../middleware/adminAuth')
const admin_controller = require('../controllers/admin')

//admin create user routes
router.post('/admin/signup', admin_controller.createAdmin);

//login admin
router.post('/admin/login', admin_controller.adminLogin) 

//logout
router.post('/admin/logoutAll', isAdmin, admin_controller.adminLogout);

//add skills
router.post('/admin/add-skill-level', isAdmin, admin_controller.addSkills)

//categories edit
router.patch('/admin/skill-level/edit/:id', isAdmin, admin_controller.update_skills)

//delete categories 
router.delete('/admin/skill-level/delete/:id', isAdmin, admin_controller.deleteSkills)

//adding categories for users
router.post('/admin/add_categories', isAdmin, admin_controller.add_categories)

//categories edit
router.patch('/admin/categories/edit/:id', isAdmin, admin_controller.update_categories)


//delete categories 
router.delete('/admin/categories/delete/:id', isAdmin, admin_controller.delete_categories)

//adding interest areas for users
router.post('/admin/add-interest-area', isAdmin, admin_controller.add_interest_area)

//interest areas edit
router.patch('/admin/interest-area/edit/:id', isAdmin, admin_controller.update_interest_area)


//delete interest areas for users
router.delete('/admin/interest-area/delete/:id', isAdmin, admin_controller.delete_interest_area )

module.exports = router;