const express = require("express")
const app = express()

app.use(express.static("public"));

app.listen(3000, () => {
    console.log("hi")
})

const resturaunts = require("./data")




app.get("/", (req, res) => {
    res.render("homepage.ejs", {
})
})

app.get("/resturaunts", (req, res) => {
    res.render("all-resturaunts.ejs", { resturaunts: resturaunts })

})

app.get("/resturaunts/:resturauntId", (req, res) => {
    const foundResturaunts = resturaunts.find((oneResturant)=>{
        return oneResturant.id === Number(req.params.resturauntId)
    }) 
    console.log(foundResturaunts)
    res.render("resturaunts-details.ejs", { resturaunt: foundResturaunts })

})
