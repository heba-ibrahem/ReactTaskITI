//JSX
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import 'jquery/dist/jquery'
import 'popper.js/dist/popper'
import ReactDOM from 'react-dom'



////DayOne Assignment

// import MyApp from './DayOne/MyApp'
// ReactDOM.render(<MyApp/>,document.querySelector('#root'))

////DayTwo Assignment

// import MyData from './DayTwo/MyData'
// ReactDOM.render(<MyData/>,document.querySelector('#root'))

////DayThree Assignment

// import MyArt from './DayThree/MyArt'
// ReactDOM.render(<MyArt/>,document.querySelector('#root'))

////DayFour Assignment

// import {Provider} from 'react-redux'
// import {createStore , applyMiddleware} from 'redux'
// import reducers from './DayFour/reducers'
// import MyMovie from './DayFour/MyMovie'

// const createStoreWithMiddleWare = applyMiddleware(/**/)(createStore)
// ReactDOM.render(<Provider store={createStoreWithMiddleWare(reducers)}>
//     <MyMovie/>
// </Provider>,document.querySelector('#root'))


////DayFour lec


import MyStudent from './DayFive/MyStudent'
import {render} from 'react-dom'


ReactDOM.render(<MyStudent/>,document.querySelector('#root'))
