const express=require('express');
const router=express.Router();
const {getData,putData,deleteData}=require('../controller/empController)
router.get("/",(req,res)=>{
res.send("get Data")
getData();
})

router.post("/addnew",(req,res)=>{
res.send("post data");
postData(req.body);
})

router.put("/update/:id",(req,res)=>{
const id=req.params.id
res.send("updated data");
putData(id,req.body)
})

router.delete("/delete/:id",(req,res)=>{
const id=req.params.id;
res.send("deleted data");
deleteData(id)
})
module.exports=router;