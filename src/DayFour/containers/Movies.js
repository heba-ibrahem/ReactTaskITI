import { Component } from "react";
import { connect } from 'react-redux'
import * as action from '../action'
import { Alert, Button } from 'reactstrap'

import { movies } from "../reducers/movies";

class Movies extends Component {

    render() {
        return <div className="container">
            <h1>Movies List</h1>
            <Button color="info" onClick={()=>{
                console.log("movie")
                console.log(this.renderMovies(this.props))
               this.props.getMovie()
            }}>Get Movie</Button>
            <br />
            <br />
            <div>
                 {this.renderMovies(this.props)}
            </div>
            <br />
            <br />

        </div>
    }
    renderMovies({ mList }) {
        if (mList) {
            return mList.map((movie) => {
                return (<div className="container">
                    <Alert className="center" color="success" key={movie.id}>
                        <p>Title:{movie.title}</p>
                        <p>Year:{movie.year}</p>
                    </Alert>
                </div>)
            })
        }
        
         return   <Alert className="center" color="danger">

                <h1>No Movies Avalible
                </h1>
            </Alert>
        
    }
    componentDidMount() {
        console.log(this.props)
        // this.props.getMovie()
    }
    componentDidUpdate() {
        console.log(this.props)
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        mList: state.moviesList
    }
}
export default connect(mapStateToProps, action)(Movies)