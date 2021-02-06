import { useRef } from "react";
import { getStudents } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Search = ({ getStudents }) => {


    const name = useRef()
    const searchByName = () => {
        console.log(name.current.value)
        getStudents(name.current.value)
    }
    return (
        <div className="col text-center">
            <div className="form-group">
                <input ref={name} className="form-control" type="text" placeholder="student"></input>

            </div>
            <div className="form-group">
                <input className="btn btn-info" type="button" value="search" onClick={searchByName}></input>
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudents }, dispatch)
}
export default connect(null, mapDispatchToProps)(Search);