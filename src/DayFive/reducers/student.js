export const students =(state={},action)=>{
    switch(action.type){
        case 'STUDENT_LIST':{
            return {...state,list:action.payload}
        }
        case 'STUDENT_DETAILS':{
            return {...state,details:action.payload}
        }
        case 'CLEAR_STUDENT_DETAIlS':{
            return {...state,details:action.payload}
        }
        
        
    }
    return state
}