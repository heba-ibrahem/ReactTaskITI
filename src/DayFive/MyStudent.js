import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './componants/home'
import StudentDetails from './containers/studentDetails'
import NotFound from './componants/notFound'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducers from './reducers'
import promiseMW from 'redux-promise'

const createStoreWithMiddleWare = applyMiddleware(promiseMW)(createStore)

const MyStudent = () => {
    return (
        <div>
            <Provider store={createStoreWithMiddleWare(reducers)}>
                <BrowserRouter>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Switch>

                                    <Route path="/students/:id" component={StudentDetails}></Route>
                                    <Route exact path="/" component={Home} ></Route>
                                    <Route path="*" component={NotFound}></Route>


                                </Switch>

                            </div>

                        </div>

                    </div>
                </BrowserRouter>
            </Provider>
        </div>
    )
}

export default MyStudent;