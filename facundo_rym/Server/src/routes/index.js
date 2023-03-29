const getCharById = require('../controllers/getCharById')
const { deleteFav, postFav} = require('../controllers/handleFavorites')
const login = require('../controllers/login')
const {Router} = require('express')

const router = Router()

const loguear=()=>{
    console.log('holaaa')
}

router.get('/character/:id',getCharById)

router.get('/login',login)

router.post('/fav',postFav)

router.delete('/fav/:id',deleteFav)


module.exports = router