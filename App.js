const express=require('express');
const mongoose=require('mongoose');
const connectDB=require('./config/db');
const app=express();
const PORT=7799;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
connectDB();
const employeeModel=require('./db/employeeSchema');
const employeeRoutes=require('./routes/employeeRoutes');
app.use("/api",employeeRoutes);
app.listen(PORT,(err)=>{
if(err) {
throw err;
}
console.log(`working on ${PORT}`);
})

// const express=require('express');
// const mongoose=require('mongoose');
// const url='mongodb://localhost/api'
// const app=express();
// PORT=9000;
// mongoose.connect(url);
// const con=mongoose.connection;
// con.on('open',function(){
//     console.log('Connected');
// })
// const empRouter=require('./routerss/employee');
// app.use('/employee',empRouter);
// app.listen(PORT,function(){
//     console.log('Server started on 9000')
// })