
// import React,{Component} from 'react'

import { Alert } from 'reactstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Artist from './artist';
import ArtistDetails from './artistDetails';
import Home from './home';


// class MyArt extends Component{
//     constructor(){
//         super()

//     }



//     render(){

//         return(
//         <div>

//         </div>    
//         )

//     }
// }

const MyArt = () => {

    return (
        <div className="Art-bg" style={{height:"100%"}}>
            <Router >
                
                <Switch>
                    
                    <Route component={ArtistDetails} path="/artist/:id"></Route>
                    <Route component={Artist} path="/artist"></Route>
                    <Route component={Home} path="/home"></Route>
                    <Route component={Home} path="/" exact></Route>
                    <Route path="*" render={() => (
                        <Alert className="center" color="danger">
                            <h1>404</h1>
                            <h1>Page Not Found
                                <Link to="/"> Navgiate to home</Link>
                            </h1>
                        </Alert>
                    )}></Route>
                </Switch>    
            </Router>
            
        </div>
    )
}

export default MyArt;