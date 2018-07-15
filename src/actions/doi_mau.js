import * as ActionTypes from './action_types';

export function actDoiMau(value) {
    console.log('act doi mau')
    return {
        type: ActionTypes.DOI_MAU,
        payload: value
    }
}
