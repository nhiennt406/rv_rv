const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const Payment = require("./models/Payment");
//Connect Database
connectDB();
require("dotenv").config()
const stripe = require("stripe")(`sk_test_51M7zRhBbJjfukPr4v8AraRVwSjLxWRiz1KNRNUVbZFFECak5bYTpu9clH6ATRziIHLIlNFFFHYNXBteD15ubyttL00pIxcyryR`)
//Init Middleware
app.use(cors());
app.use(bodyParser.json({ limit: "10000kb", extended: true }));
app.use(express.json({ extended: false }));

app.post("/payment", cors(), async (req, res) => {
  let { id, amount} = req.body
  // localStorage.getItem("datane")=new
  try {
    const newPayment = new Payment(
      req.body
    )
      newPayment.save().then(data=> {
        // console.log('>>>>>>>sc')
      })
    
    const paymentT={
      // amount,
      // currency:"USD",
      // payment_method: id,
      // date,
    }
    const payment = await stripe.paymentIntents.create(
      {
       amount,
    	currency: "USD",
    	description: "Spatula company",
    	payment_method: id,
    	confirm: true
    }
    )
    
    // console.log("Payment", payment)
    res.json({
    	message: "Payment successful",
    	success: true,
      // payment
    })
  } catch (error) {
    console.log("Error", error)
    res.json({
      message: "Payment failed",
      success: false
    })
  }
})
//Set Path

//Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/bikes", require("./routes/api/bikes"));
app.use("/api/fashions", require("./routes/api/fashions"));

// app.use("/payment",require("./routes/api/payment"));
// app.use("api/stripe", require("./routes/api/stripe"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
//63872da5f252e879cd30ef7b
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
//Start web server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
