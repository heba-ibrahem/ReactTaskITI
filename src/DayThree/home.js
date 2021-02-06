import { Alert } from 'reactstrap'
import {Component} from 'react'
import Artist from './artist'
class Home extends Component{

    constructor(props){
        super(props)
        this.state ={
            artists:[]
        }
        this.baseURL = "http://localhost:3001/artists"
    }
    renderArtists({artists}){
        if(artists&&artists.length>0){
           
            return artists.map((artist)=>{
                
                return <Artist key={artist.id} artistInfo={artist}/>
            })
        }
        return <Alert color="danger">No Artist found </Alert>
        
    }
    render(){

        return(
        <div>
            <div>
                 <img src={`/art/cover.png`} alt="cover" width="100%" />
                 <h1 className="homeHed logo">MUSIC-DB</h1>
            </div>
            <h1 className="center p-3" >Browser the Artists</h1>
            {this.renderArtists(this.state)}
        </div>    
        )
    }
    componentDidMount(){
        fetch(this.baseURL,{method:'GET'})
        .then((response)=>{
            // console.log(response.json())
            if(response.status===200){
                return response.json()
            }

        })
        .then((data)=>{
            console.log(data)
            this.setState({artists:data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export default Home;