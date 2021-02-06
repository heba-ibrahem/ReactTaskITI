
import React,{Component} from 'react'


class Slider extends Component{
    constructor(){
        super()
        this.images=['./images/1.jpg','./images/2.jpg','./images/3.jpg','./images/4.jpg','./images/5.jpg','./images/6.jpg']
        this.index=0
        this.time = 0;
        this.state = {
            src: './images/1.jpg'
        }
    }
    next=()=>{
        if (this.index< this.images.length-1){
            console.log(this.index)
            this.setState({src:this.images[++this.index]})
        }
    }
    prev=()=>{
        if (this.index>0){
            console.log(this.index)
            this.setState({src:this.images[--this.index]})
        }
    }
   
    slide = () => {
        this.time= setInterval(()=>{
            if (this.index < this.images.length - 1) {
                console.log(this.index)
                this.setState({ src: this.images[++this.index] })
            }
            else{
                this.setState(this.indexId)
            }
        },1000)
       
    }
    stop = () => {
        clearInterval(this.time)
    }
    render(){
        
        return(
            <div className="center">
                <h1 >Slider</h1>
                <hr/>
                <img alt="" src={this.state.src} width="400" height="200" id="img"></img>
                <br/><br/>
                <input id="btn" type="button" name="Next" value="Next" onClick={this.next}></input>
                <input id="btn" type="button" name="SlideShow" value="SlideShow" onClick={this.slide}></input>
                <input id="btn" type="button" name="Stop" value="Stop"onClick={this.stop}></input>
                <input id="btn" type="button" name="Previuos" value="Previuos" onClick={this.prev}></input>
    
            </div>)
        
    }
}

export default Slider;