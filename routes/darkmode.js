const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.cookie('Darkmode','dark',{
        //maxAge: 20000,
        expires: new Date('2023-12-31'),
        httpOnly: true,
        secure: true,
        sameSite: 'lax'
    })

    res.redirect('/')
})

module.exports = router