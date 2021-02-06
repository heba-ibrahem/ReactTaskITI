export const studentList =(state=null,action)=>{
    console.log("reducer action",action)
    if(action.type ===  'STUDENT_LIST'){
        return action.payload
    }
    return state; 
} 