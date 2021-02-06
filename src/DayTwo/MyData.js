
import React,{Component} from 'react'
import Register from './register'
import Students from './student'
import List from './List.json'

class MyData extends Component{
    constructor(){
        super()
        console.log(List)
        this.state ={
            studentsList: List
        }
    }

    addStudent = (name,age)=>{
        console.log(name)
        const student={
            "id":(this.state.studentsList[this.state.studentsList.length-1].id+1),
            "name": name,
            "age":age
        }
        this.state.studentsList.push(student)
        this.setState({studentsList:this.state.studentsList})
        // console.log(this.state.studentsList)
    }
    
    render(){
        
        return(
        <div>
             <Register onAdding={this.addStudent}/>
             <br/><br/>
             <hr/>
             <br/><br/>
             <Students list={this.state.studentsList}/>
            

            
        </div>    
        )

    }
}

export default MyData;