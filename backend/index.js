const express = require('express');
const app = express();
//importing router
const userRouter = require('./routers/userrouter');
const imageRouter = require('./routers/imagerouter');
const predictionRouter = require('./routers/predictionrouter');
const utilRouter = require('./routers/util');
const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001']
}))
// parse json data
app.use(express.json());
// adding routers
app.use('/user',userRouter);
app.use('/image',imageRouter);
app.use('/prediction',predictionRouter);
app.use('/util',utilRouter);

app.use(express.static('./static/uploads'));

const port = 5000;

app.post("/create-payment-intent", async (req, res) => {
    const { amount } = req.body;
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });

app.get('/', (req, res) => {
    res.send('Working Perfectly')
});

app.get('/add',(req, res) => {
    res.send('Response from Add');
})

// getall
app.get('/getall',(req,res) => {
    res.send('Hello')
})

app.listen(port, () => { console.log('server started!!'); } );