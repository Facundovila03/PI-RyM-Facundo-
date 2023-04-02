let myFavorites = []

const postFav = (req,res)=>{
    myFavorites.push(req.body)
    console.log('estas agregando un fav')
    console.log(myFavorites)
    console.log('holis')
    res.status(200).send(myFavorites)
}

const deleteFav = (req,res)=>{
    const {id} = req.params
    console.log(id)
    console.log(myFavorites)
    myFavorites = myFavorites.filter((char)=> char.id == id)
    // console.log(myFavorites)
    res.status(200).send(myFavorites)
}

module.exports = {
    deleteFav,
    postFav
}