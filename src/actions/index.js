import { ROOT } from '../reducers/types';

export const changeRootMsg = () => dispatch => dispatch({ type: ROOT, payload: 'redux works with actions' });

