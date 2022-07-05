const express= require("express")
const cors =require("cors")
const mongoose=require("mongoose")
const AuthRoute=require('./routes/authRoutes')
const routes=require('./routes/routes')

const PORT =process.env.PORT || 8080

const app =express();

app.use(express.json())

app.use(cors())

app.use('/',AuthRoute)
app.use('/',routes)

const URI="mongodb+srv://Guhan:guhan@cluster0.ar76cyf.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(URI).then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running in ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})