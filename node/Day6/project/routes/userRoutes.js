const router=require('express');
const { User } = require("../models");

router.get('/',async (req,res)=>{

try{
 const users= await User.findAll();
 res.json(users);
}
catch(err){
  console.log(err);
  res.status(500).send(err.message);
}
});
router.post('/',async (req,res)=>{

  try{
   const users= await User.c();
   res.json(users);
  }
  catch(err){
    console.log(err);
    res.status(500).send(err.message);
  }
  });
  router.post("/", async (req, res) => {
    try {
      const { name, email } = req.body;
  

      if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
      }
  

      const newUser = await User.create({ name, email });
  
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
  


module.exports=router;