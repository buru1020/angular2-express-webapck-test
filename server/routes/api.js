const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  console.log('----!!');
  res.send('api works!');
});

module.exports = router;
