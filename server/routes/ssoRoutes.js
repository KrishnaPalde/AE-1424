const express = require("express");
const jwt = require('jsonwebtoken')
const router = express.Router();

router.post("/create-token", (req, res) => {

  const token = jwt.sign(
    {
      email: "aartieducare@gmail.com",
      role: "admin",
      issuer: "AARTI_EDUCARE"
    },
    process.env.SSO_SHARED_SECRET,
    { expiresIn: "60s" }
  );

  res.json({ token });
});

module.exports = router;