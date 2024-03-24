const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`listening to requests at port ${PORT}`))

app.use(express.json())

app.get('/api/verify', (req,res)=>{
    res.json({"reply": "hello  from server!"})
})