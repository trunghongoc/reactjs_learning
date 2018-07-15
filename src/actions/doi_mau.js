import * as ActionTypes from './action_types';

export function actDoiMau(value) {
    return {
        type: ActionTypes.DOI_MAU,
        payload: value
    }
}
