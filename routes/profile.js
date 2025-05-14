// routes/profile.js
const express = require('express');
const router = express.Router();

// Example profile route
router.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  const user = req.user;
  res.render('profile', { name: user.name, role: user.role }); // Profile template (profile.ejs)
});

module.exports = router;
