import React, { Component } from 'react';

class TypeModuleComponent extends Component {
    constructor(props) {

        super(props)
        const { dispatch } = this.props
        // socket = io.connect("http://localhost:3000")
        // dispatch(loadInitialDataSocket(socket))

        // socket.on('itemAdded', (res) => {
        //     console.dir(res)
        //     dispatch(AddItem(res))
        // })

        // socket.on('itemMarked', (res) => {
        //     console.dir(res)
        //     dispatch(completeItem(res))
        // })
    }

    componentWillUnmount() {
        // socket.disconnect()
        // alert("Disconnecting Socket as component will unmount")
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src='' className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit  and save to reload.
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state = {}) => {
    // console.dir(state)
    return { state };
};

export default TypeModuleComponent;
