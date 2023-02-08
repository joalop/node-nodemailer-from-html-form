const express =  require('express')

const router = express.Router()

router.get('/', (req, res) => {

    console.log(req.cookies)

    res.clearCookie('Darkmode')

    res.redirect('/')

})

module.exports = router;