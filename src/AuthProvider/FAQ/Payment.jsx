import React from 'react';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCarts from '../../../Hooks/useCarts/useCarts';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    const [cart] = useCarts();
    const price = parseFloat(cart[0]?.price || 0);

    return (
        <div>
            

            <Elements stripe={stripePromise}>
                <CheckOutForm price={price} cart={cart} />
            </Elements>
        </div>
    );
};

export default Payment;