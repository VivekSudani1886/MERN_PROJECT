const express = require('express');
const router = express.Router();
const Bill = require('../models/Bill');


router.post('/', async (req, res) => {
    try {
        const { billHolder, items } = req.body;
        const newBill = new Bill({ billHolder, items });
        const savedBill = await newBill.save();
        res.json(savedBill);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
});


router.get('/', async (req, res) => {
    try {
        const bills = await Bill.find();
        res.json(bills);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
});

router.put('/:id', async (req, res) => {  
    try {
        const updatedBill = await Bill.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBill) {
            return res.status(404).send('Bill not found');
        }
        res.send(updatedBill);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

router.delete('/:id', async (req, res) => {  
    try {
        const deletedBill = await Bill.findByIdAndDelete(req.params.id);
        if (!deletedBill) {
            return res.status(404).send('Bill not found');
        }
        res.send(deletedBill);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
