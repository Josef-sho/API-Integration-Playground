const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /products'
    });
}); 

router.get('/:ProductId', (req,res,next) =>{
    const id = req.params.ProductId;
    if (id == 'special'){
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });}
        else{
            res.status(200).json({
                message: 'You passed an ID'
        }
    );
    }

})

module.exports = router;