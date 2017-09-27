import React from 'react'
import {connect} from 'react-redux'
import {changeRootMsg} from '../actions'

const App = (props) => {
    setTimeout(props.changeRootMsg, 1000)
    return <div>App: {props.root}</div>
}

const mapStateToProps = ({root}) => {
    return {
        root: root.msg
    }
};

export default connect(mapStateToProps,{changeRootMsg})(App)