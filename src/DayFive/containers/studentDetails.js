import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, Card } from 'reactstrap'
import { bindActionCreators } from 'redux'
import { showModal} from '../componants/navbar'
import { getStudentDetails, clearStudentDetails } from '../actions'
const StudentDetails = ({ getStudentDetails, clearStudentDetails, details, match }) => {
    const id = match.params.id
    console.log(id)
    useEffect(() => {
        console.log('as comp did mount')
        getStudentDetails(id)
        return () => {
            console.log("clearUp")
            clearStudentDetails()
        }
    }, [id])
    const baseURL = "http://localhost:3001/students"
    const renderStudentDetails = (details) => {
        if (details && details.id) {
            return (
                <div>
                    <Card className="card bg-dark text-white">
                        <div className="card-body" >
                            <h2>Name:{details.name}</h2>
                            <h2>Age:{details.age} </h2>
                            <h2>Phone:{details.phone} </h2>
                            <Button color="info" onClick={() => {
                                fetch(`${baseURL}/${details.id}`, { method: "PUT" })
                                .then(() => {this.showModal()})
                            }}>Edit</Button> <br /><br />
                            <Button color="danger" onClick={() => {
                                fetch(`${baseURL}/${details.id}`, { method: "DELETE" })
                                .then(() => {alert("Student is deleted ")
                                window.location.replace('/')})
                            }}>Delete</Button>
                        </div>

                    </Card>
                </div>
            )
        }

    }

    return (<div className="alert alert-light">
        {renderStudentDetails(details)}
    </div>)
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        details: state.students.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudentDetails, clearStudentDetails }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails);