import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    
    return (
      // De base, Stripe s'appuie sur la plus petite devise possible (ici cents)
      <StripeCheckout 
        name="Emaily"
        description='$5 for 5 emails credit'
        amount={500}
        // Stripe convention naming
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add credits</button>
      </ StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
