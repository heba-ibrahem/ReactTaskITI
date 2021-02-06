const Student =({studentInfo, history})=>{
    const goToDetalis =()=>{
        // console.log("got",history)
        history.push(`/students/${studentInfo.id}`)
    }
    if (studentInfo){
        return(
            <div className="alert alert-success">
               <h4 onClick={goToDetalis}>{studentInfo.name}</h4> 
              {/* <link className="form-control" >Details</button> */}

            </div>
        )
    }
   
}

export default Student;