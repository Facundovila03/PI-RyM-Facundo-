import { ADD_CHARACTER, FILTER, ORDER, REMOVE_CHARACTER } from "./action"

 export const initialState ={
    myFavorites: [],
    allCharacters:[],
}


const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_CHARACTER:
            console.log('parece q queres anadir un fav')
            console.log(action.payload)
            return {
                ...state,
                myFavorites: [...state.allCharacters,action.payload],
                allCharacters: [...state.allCharacters,action.payload]
            }
            case REMOVE_CHARACTER:
            console.log('parece q queres remover un fav')
            return {
                ...state,
                myFavorites: state.myFavorites.filter((char)=> char.id !== action.payload)
            }
            case FILTER:    
            
            const {allCharacters} = state
            return{
                ...state,
                myFavorites: allCharacters.filter((char)=>char.gender === char.action.payload),
            };
            
            case ORDER:             //! recibe un id
                const todosLosCharacters = state.allCharacters
                if(action.payload === 'ascendente'){
                    var aux =todosLosCharacters.sort((a,b)=> {return a.id-b.id})
                }else{
                    var aux =todosLosCharacters.sort((a,b)=> {return b.id-a.id})
                }
                return{
                    ...state,
                    myFavorites:aux
                }
                break;
                default:
            return {...state}
    }
}

export default reducer;