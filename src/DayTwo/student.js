// import React, { Component } from 'react'
import { Table, Alert } from 'reactstrap';

// class Students extends Component {
//     constructor() {
//         super()
//         this.state = {
//             name: "heba"

//         }

//     }
//     render() {
//         return (
//             <div >

//                 <div className="container">

//                     <Alert className="center" color="success">

//                     <h1>Students</h1>
//                      </Alert>
//                     <Table dark>
//                         <thead>
//                             <tr>
//                                 <th>Student</th>
//                                 <th>Age</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td></td>
//                                 <td></td>
//                             </tr>
//                         </tbody>
//                     </Table>
//                 </div>

//             </div>
//         )
//     }
// }
// export default Students;

const Students = (props) => {
     console.log(props)
    const students = props.list.map((item) => {
        return (

                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                </tr>
              
            

        )
    })
    return (
        <div >

            <div className="container">

                <Alert className="center" color="success">

                    <h1>Students</h1>
                </Alert>
                <Table dark>
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {students}
                        
                    </tbody>
                </Table>
            </div>
           

        </div>
    )

}
export default Students;