const router = require('express').Router();
const generator = require('generate-password');

router.post ('/generating', (req,res) => {
try{
  const password = generator.generate({
    length: req.body.length,
    numbers: req.body.numbers,
    symbols: req.body.symbols,
    lowercase: req.body.lowercase,
    uppercase: true,
    strict: req.body.strict
  });
  console.log(password)
  res.status(200).json(password);
  
}catch(err) {
  console.log(err);
  res.status(400).json(err);
}
});

module.exports = router;