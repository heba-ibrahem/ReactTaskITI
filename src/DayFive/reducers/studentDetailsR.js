export const studentDetailsR =(state=null,action)=>{
    console.log("detalis reducer action",action)
    if(action.type ===  'STUDENT_DETAILS'){
        return action.payload
    }
    return state; 
}