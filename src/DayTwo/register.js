import React, { Component } from 'react'
import { Button, FormGroup, Label, Input, Form, Alert } from 'reactstrap';

class Register extends Component {
    constructor() {
        super()
        this.state = {
            name:'',
            age:''
        }
    }
    add=()=>{
        if(this.state.name !=='' && this.state.age !==''){
            this.props.onAdding(this.state.name,this.state.age)
            this.setState({ name: '' , age:''});
            
        }
        else{
            alert("Missing input")
        }
    }
    change=(item)=>{
        // console.log(item.target.value)
        // this.props.onAdding(item.target.value)
        // this.setState({name:item.target.value})
        // this.setState({age:item.target.value})
        // let val= item.target.value;
        // this.setState({[item.target.value]:val})
    }
    render() {
        return (
            <div >

                <div className="container">
                    
                    <div className="bg-dark height " >
                        <h1 className="center p-4 text-white">Add</h1>
                    </div>
                    
                    <Form>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input type="text" placeholder="Enter your Name" required value={this.state.name}
                            onChange={(item)=>{
                                this.setState({name:item.target.value})
                            }}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Age</Label>
                            <Input type="number" placeholder="Enter your Age" required value={this.state.age} 
                            onChange={(item)=>{
                                this.setState({age:item.target.value})
                            }}></Input>
                        </FormGroup>
                    </Form>
                    <Button color="success" onClick={this.add}> Add</Button>
                    <p>Entered name: {this.state.name} </p>
                    <p>Entered age: {this.state.age} </p>
                </div>
                
            </div>
        )
    }
}
export default Register;