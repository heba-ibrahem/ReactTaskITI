import { Component } from "react";
import { Modal, ModalHeader, Button, ModalFooter, ModalBody, Label, FormGroup, Input } from 'reactstrap'
// import stList from '../db.json'

export class AddStudent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            age: "",
            phone: "",
        }
        this.changeName = this.changeName.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.add = this.add.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    
    changeName(e) {
        this.setState({ name: e.target.value });
    }
    changeAge(e) {
        this.setState({ age: e.target.value });
    }
    changePhone(e) {
        this.setState({ phone: e.target.value });
    }
    add(e) {
        e.preventDefault();
        const onAdd = this.props.onAdd;
        // const regExp = /\s*,\s*/;
        var newName = this.state.name;
        var newAge = this.state.age;
        var newPhone = this.state.phone;

        var newStudent = { name: newName, age: newAge, phone: newPhone };
        onAdd(newStudent);
        this.setState({ name: "", age: "", phone: "" });
    }
    cancel() {
        const onAddModal = this.props.onAddModal;
        this.setState({ name: "", age: "", phone: "" });
        onAddModal();
    }
    render() {
        const onOpen = this.props.isOpen
        // const validStudent = this.state.name &&
            this.state.ingredients &&
            this.state.ingredients;
        return (
            <div>
                <Modal isOpen={onOpen}>
                    <ModalHeader>Add Student</ModalHeader>
                    <ModalBody>
                        <FormGroup controlId="formControlsName">
                            <Label>Name</Label>
                            <Input type="text" placeholder="Name" onChange={this.changeName} value={this.state.name}></Input>
                        </FormGroup >
                        <FormGroup controlId="formControlsName">
                            <Label>Age</Label>
                            <Input type="text" placeholder="Age" onChange={this.changeAge} value={this.state.age}></Input>
                        </FormGroup >
                        <FormGroup controlId="formControlsName">
                            <Label>Phone Number</Label>
                            <Input type="text" placeholder="Phone Number" onChange={this.changePhone} value={this.state.phone}></Input>
                        </FormGroup >
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.add}>Add</Button>
                        <Button color="danger" onClick={() => { this.showModal() }}  >close</Button>
                       
                    </ModalFooter>

                </Modal>
            </div>
        )
    }


}

