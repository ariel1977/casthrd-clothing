require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.post('/payment', (req, res) => {
  try {
    console.log('in payment')
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: 'usd'
    };
    console.log('env?', process.env.STRIPE_SECRET_KEY)
    console.log('body?', body)
    stripe.charges.create(body, (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).send({ error: stripeErr });
      } else {
        res.status(200).send({ success: stripeRes });
      }
    });
  } catch (error) {
    console.error(error)
    res.status(500).send({message: error.message})
  }
});

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

