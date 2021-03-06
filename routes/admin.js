const express = require('express');
const router = new express.Router();
const admin_controller = require('../controllers/Admin');
const admin_categories = require('../controllers/AdminCategories');
const admin_interest = require('../controllers/AdminInterestArea');
const admin_skill = require('../controllers/AdminSkill');
const admin_user = require('../controllers/AdminUser');
const user_controller = require('../controllers/User');
const isAdmin = require('../middleware/adminAuth');
// const isUser = require('../middleware/userAuth');

//admin create user routes
router.post('/admin/signup', admin_controller.createAdmin);

//login admin
router.post('/admin/login', admin_controller.adminLogin);

//get trainee profile
// router.get('/admin/view/profile', isUser, admin_controller.view_user_profile );

//delete users
router.delete('/admin/delete/user', isAdmin, admin_user.delete_user);

//logout
router.post('/admin/logoutAll', isAdmin, admin_controller.adminLogout);

//add skills
router.post('/admin/add-skill-level', isAdmin, admin_skill.addSkills);

//categories edit
router.put('/admin/skill-level/edit', isAdmin, admin_skill.update_skills);

//delete categories
router.delete('/admin/utlity/apiSki/delete', isAdmin, admin_skill.deleteSkills);

//adding categories for users
router.post('/admin/add_categories', isAdmin, admin_categories.add_categories);

//categories edit
router.put('/admin/categories/edit', isAdmin, admin_categories.update_categories);

//delete categories
router.delete('/admin/utlity/apiCat/delete', isAdmin, admin_categories.delete_categories);

//adding interest areas for users
router.post('/admin/add-interest-area', isAdmin, admin_interest.add_interest_area);

//interest areas edit
router.put('/admin/interest-area/edit', isAdmin, admin_interest.update_interest_area);

//delete interest areas for users
router.delete('/admin/utlity/apiInt/delete', isAdmin, admin_interest.delete_interest_area);

//GET admin Trainees
router.get('/dashboard-trainees', isAdmin, user_controller.get_trainings);

//GET admin Interns
router.get('/dashboard-interns', isAdmin, user_controller.get_interns);

//GET admin Hub users
router.get('/dashboard-hub', isAdmin, user_controller.get_hub);

//GET admin Traine the Trainer
router.get('/dashboard-trainer', isAdmin, user_controller.get_trainer);

//get admin categories
router.get('/admin-departments', isAdmin, admin_categories.get_categories);

//get admin interest-areas
router.get('/admin-interest-areas', isAdmin, admin_interest.get_interest_area);

//get admin skill levels
router.get('/admin-skill-levels', isAdmin, admin_skill.get_Skills);

router.get('/admin-dashboard', isAdmin, function(req, res, next) {
	res.render('dashboard', { title: 'KodeHauz Training Portal' });
});

//GET PROFILE FORM
router.get('/admin/view/profile', isAdmin, admin_user.view_user_profile);

module.exports = router;
