import StudentsList from "../containers/studentList";
import Search from "../containers/search"
import Navbar from "./navbar";
import stList from '../db.json'
import React,{Component} from 'react'

// class Home extends Component{
//     constructor(){
//         super()
//          console.log(stList)
//         this.state ={
//             shownList:stList
//         }
//     }
    
//     render(){
        
//         return(
//             <div>
//             <Navbar/>
//             <h1 className=" text-white bg-info text-center"> Student Assignment </h1>
//             <Search/>
//             <StudentsList StdList={this.state.shownList}/>
//         </div>
//         )

//     }
// }
const Home =({history})=>{
    return(
        <div>
            <Navbar/>
            <h1 className=" text-white bg-info text-center"> Student Assignment </h1>
            <Search/>
            <StudentsList history={history}/>
        </div>
    )
}

export default Home;