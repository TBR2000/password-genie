const router = require('express').Router();
const generator = require('generate-password-browser');

router.post ('/generating', async (res,req) => {
  console.log(res.body)
try{
  const password = generator.generate({
    length: `${req.body.length}`,
    numbers: `${req.body.numbers}`,
    symbols: `${req.body.symbols}`,
    lowercase: `${req.body.lowercase}`,
    uppercase: `${req.body.uppercase}`,
    strict: `${req.body.strict}`
  })
  return password;
}catch(err) {
  console.log(err);
  res.status(400).json(err);
}
});

module.exports = router;