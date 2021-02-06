import React, { Component } from 'react'

class Name extends Component {
    constructor() {
        super()
        this.state = {
            name: "heba"

        }

    }
    render() {
        return (
            <div className="center">
               
                <input id="input" type="text" value={this.state.name}
                    onChange={
                        (e) => {
                            this.setState({ name: e.target.value })
                        }

                    }
                ></input>
                <br/><br/>
                <input id="btn" type="button" value="click"
                    onClick={() => {

                        this.setState({ name: 'Heba Ibrahem' })

                    }}
                ></input>

                <p>
                    Name: {this.state.name}
                </p>
            </div>
        )
    }
}
export default Name;