const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  console.log('1111111111');
  res.send('api works');
});

module.exports = router;
