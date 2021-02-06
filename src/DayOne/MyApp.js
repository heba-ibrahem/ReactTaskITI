
import React,{Component} from 'react'
import Header from "./header"
import Slider from "./slider"
import Name from "./name"

class MyApp extends Component{
    constructor(){
        super()
        
        
    }
    render(){
        
        return(
        <div>
             <Header/>

             <Slider/>
             <br/><br/>
             <hr/>
             <br/><br/>
             <Name/>
            

            
        </div>    
        )

    }
}

export default MyApp;