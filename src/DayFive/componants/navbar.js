import { Component, React } from 'react';
import stList from '../db.json'
import { Modal, ModalHeader, Button, ModalFooter, ModalBody, Label, FormGroup,Input } from 'reactstrap'
class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            shownList: stList,
        addlist:{
            name: "",
            age: "",
            phone: "",}
        }
        this.changeName = this.changeName.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.add = this.add.bind(this);
        this.cancel = this.cancel.bind(this);
        this.showModal = this.showModal.bind(this);
        this.addStudent = this.addStudent.bind(this);
    }
    showModal() {
        this.setState({ isOpen: !this.state.isOpen })
    }
    addStudent(student) {
        console.log(student)
        let shownList = this.state.shownList;
        shownList.push(student);
        this.setState({ shownList: shownList });
        this.showModal();
    }
    changeName(e) {
        this.setState({ name: e.target.value });
    }
    changeAge(e) {
        this.setState({ age: e.target.value });
    }
    changePhone(e) {
        this.setState({ phone: e.target.value });
        console.log({ phone: e.target.value })
    }
    add(e) {
        // e.preventDefault();
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
        const shownList = this.state.shownList;
        const validStudent = this.state.name &&
         this.state.ingredients&&
         this.state.ingredients;
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>

                        <button onClick={() => { this.showModal() }} className="btn btn-success my-2 my-sm-0" type="button">Add</button>
                        <Modal isOpen={this.state.isOpen}>
                            <ModalHeader>Add Student</ModalHeader>
                            <ModalBody>
                                <FormGroup  controlId="formControlsName">
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
                                <Button color="primary"  onClick={this.addStudent}>Add</Button>
                                <Button color="danger" onClick={() => { this.showModal() }}  >close</Button>
                                
                            </ModalFooter>

                        </Modal>

                    </div>
                </nav>

            </div>
        )
    }

}

export default Navbar;

