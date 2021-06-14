const router = require('express').Router();
const generator = require('generate-password-browser');
const generated = require('../../models/generated')


router.post ('/generating', (res,req) => {
try{
  const password = generator.generate({
    length: `${res.body.length}`,
    numbers: `${res.body.numbers}`,
    symbols: `${res.body.symbols}`,
    lowercase: `${res.body.lowercase}`,
    uppercase: `${res.body.uppercase}`,
    strict: `${res.body.strict}`
  });
    //const passwordData = await generated.create(password)
    console.log(password);
  res.status(200).json(password);
  //return password
}catch(err) {
  console.log(err);
  res.status(400).json(err);
}
});

module.exports = router;