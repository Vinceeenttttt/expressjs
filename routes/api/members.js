const express = require('express');
const router = express.Router();
const members = require('../../Members');
const url = require('url');

// Gets All Members
//router.get('/', (req, res) => res.json(members));

// Create Member
router.post('/', (req, res) => {
  var newurl = new URL(req.body.url);
  newurl.hostname = 'embed.ted.com';

  const newMember = {
    url: newurl,
  };

  if (!newMember.url) {
    return res.status(400).json({ msg: 'Please include a url' });
  }

  members.push(newMember);
  //res.json(members);
  res.redirect('/');
});

module.exports = router;