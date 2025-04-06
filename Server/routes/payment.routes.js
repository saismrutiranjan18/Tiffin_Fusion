const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51OuYfuKdDRRQlCdmUg7rlvnvJuRLf2bGwuZIhfUQvzWWA4hzSnpkGnC1ZhzKH2ljOeXpuuClzngF3UWVihWDcV0400HGhJcfFi'); // Using a test key

router.post('/create-payment-intent', async (req, res) => {
    const { amount, currency} = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: currency,
            payment_method_types: ['card'],
        });

        res.send({
            client_secret: paymentIntent.client_secret,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;