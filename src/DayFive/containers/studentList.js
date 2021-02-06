import { connect } from 'react-redux'
import Student from '../componants/student'
const StudentsList = ({ list, history }) => {
    if (list) {
        if(list.length>0){
            return (
                <div className="alert">
                    {list.map((student) => {
                        return <Student key={student.id} studentInfo={student} history={history} />
                    })}
                </div>
            )
        }
        return (
            <p>enter a vaild student</p>
        )
        
    }

    return <p>
        enter a student
        </p>

}

const mapStateToProps = (state) => {
    return {
        list: state.students.list
    }
}
export default connect(mapStateToProps,null)(StudentsList);