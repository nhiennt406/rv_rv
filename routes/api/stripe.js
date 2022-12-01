const express = require('express');
// const app = express();
const router= express.Router();
const url_client=`http://localhost:3000/`
const stripe = require('stripe')('pk_test_51M7zRhBbJjfukPr45AM4xY9GbR6BbhToF4w2AO35u3ShMCrzy1EtibG0ymXo0e4MS8gz4vouCEqUUModv9HGZmeY004W3f34a8');
// const Stripe = require('stripe')
// const stripe= Stripe(process.env.STRIPE_KEY)
router.post('/create-checkout-session', async (req, res) => {
  // const session = await stripe.checkout.sessions.create({
  //   line_items: [
  //     {
  //       price_data: {
  //         currency: 'usd',
  //         product_data: {
  //           name: 'T-shirt',
  //         },
  //         unit_amount: 2000,
  //       },
  //       quantity: 1,
  //     },
  //   ],
  //   mode: 'payment',
  //   success_url: `${url_client}/checkoutsucess`,

  //   cancel_url: `${url_client}/checkoutsucess`,
  // });
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {currency: 'usd', product_data: {name: 'T-shirt'}, unit_amount: 2000},
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${url_client}/checkoutsucess`,
    cancel_url: `${url_client}/checkoutsucess`,
  });
  res.send({url:session.url})
});
module.exports= router;
// app.listen(4242, () => console.log(`Listening on port ${4242}!`));