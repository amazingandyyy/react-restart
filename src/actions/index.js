import {ROOT} from '../reducers/types'
import {actionCreator,dispatch} from 'react-redux'

export const changeRootMsg = () => {
    return (dispatch) => dispatch({type: ROOT, payload:'redux works with actions'})
}