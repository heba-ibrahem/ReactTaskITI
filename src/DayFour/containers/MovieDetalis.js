import { Component } from "react";
import { connect } from 'react-redux'
import * as action from '../action'
import { Alert, Button, Input } from 'reactstrap'

import { oneMovie } from "../reducers/oneMovie";


class MovieDetails extends Component {
    constructor(){
        super()
        this.state={
           target:0
        }
    }

    render() {
        return <div className="container">
            <h1>Serch movie</h1>
            
            <div className="row">
                <Input type="text" placeholder="search By Id" className="col-2" onChange={(item)=>{this.setState({target:item.target.value})}}></Input>
                <Button color="info" onClick={()=>{
                // console.log("one movie")
                // console.log(this.renderMovieDetails(this.props))
               this.props.getMovieById(parseInt(this.state.target))
            }}>Get</Button>
            </div>
            <br />
            <br />
            <div>
                 {this.renderMovieDetails(this.props.movieDtails)}
            </div>
           
            <br />
            <br />
            
            
            
        </div>
    }
    renderMovieDetails(movieDtails) {
        if (movieDtails) {
           
                return (<div className="container">
                    <Alert className="center" color="success" key={movieDtails.id}>
                        <p>Title:{movieDtails.title}</p>
                        <p>Year:{movieDtails.year}</p>
                    </Alert>
                </div>)
           
        }
        
         return   <Alert className="center" color="danger">

                <h1>No Movies Avalible
                </h1>
            </Alert>
        
    }
    componentDidMount() {
        console.log('mount')
        console.log(this.props)
        // this.props.getMovieById()
    }
    componentDidUpdate() {
        console.log(this.props)
    }
}
const mapStateToProps = (state) => {
    console.log("onemovieMap")
    console.log(state)
    return {
        movieDtails: state.movie
    }
}
export default connect(mapStateToProps, action)(MovieDetails)