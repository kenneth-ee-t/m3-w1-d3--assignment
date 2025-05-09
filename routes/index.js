const express = require('express');
const {check, validationResult} = require('express-validator');
const router = express.Router();

// GET home page.
router.get('/', function(req, res) {
    res.render('form', { title: 'Registration form',
        errors: [],
        data: {},
    });
});

router.post('/',
    [
        check('name')
            .isLength({min: 1})
            .withMessage('Please enter a name'),
        check('email')
        .isLength({min: 1})
            .withMessage('Please enter an email'),
    ],
    function(req, res) {
    //console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.render('form', { title: 'Registration form',
            errors: errors.array(), 
            data: req.body,
            });
    }else {
        res.send('Thank you for your registration'); 
    }
}
);
module.exports = router; 