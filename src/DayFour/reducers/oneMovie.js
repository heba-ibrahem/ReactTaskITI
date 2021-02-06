export function oneMovie(state=null,action){
    console.log("oneMovie Acton")
     console.log(action)
   if (action.type=== "one_Movie"){
       return action.payload
   }
   return state
}