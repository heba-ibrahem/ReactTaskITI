const baseURL = "http://localhost:3001/students"
export const getStudents = async (name) => {
    let payload;
    try{
        let response = await fetch(`${baseURL}?name=${name}`)
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENT_LIST',
        payload
    }
}




export const getStudentDetails = async (id) => {
    let payload;
    try{
        let response = await fetch(`${baseURL}/${id}`)
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return {
        type: 'STUDENT_DETAILS',
        payload
    }

}

export const clearStudentDetails = async (id) => {
    return{
        type:'CLEAR_STUDENT_DETAIlS',
        payload:null
    }

}

// export const deleteStudent =() => {
//      fetch(`${baseURL}/${details.id}`,{ method:"DELETE"})
//     .then(()=>alert("Student is deleted "))
//     window.location.replace('/')
// }

