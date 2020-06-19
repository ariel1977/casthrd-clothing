import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51GvimrJbYJllYuHhdUDelJTObi3wCyXUw0oi0OT07L9FBRthJa2mxth8XFP2WkVBm0zuZTS2hUeUQ1pveofsMyCn009ayj0f57'

const OnToken = token => {
  console.log (token);
  alert('Payment Successful');
}

  return (
    <StripeCheckout
      label='Pay Now'
      name='CasualThread Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://image.flaticon.com/icons/png/512/1852/1852515.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={OnToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;