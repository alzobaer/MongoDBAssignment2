const express = require("express");
const mongoose = require("mongoose")
const app = express();
//import promoRouter module
const promoRouter = require("./routes/promoRouter");
//import leaderRouter module
const leaderRouter = require("./routes/leaderRouter");

//connection with  mongoose
mongoose.connect('mongodb://localhost/MongoDBAssignment');



app.use("/promotions", promoRouter);
app.use("/leaders", leaderRouter);





app.listen(3000, () => {
    console.log("server is running on port 3000");
})