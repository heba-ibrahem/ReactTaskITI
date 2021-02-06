

export function movies(state=null,action){
     console.log(action)
    if (action.type=== "Movie_list"){
        return action.payload
    }
    return state
}