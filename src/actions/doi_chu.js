import * as ActionTypes from './action_types';

export function actDoiChu(value) {
    return {
        type: ActionTypes.DOI_CHU,
        payload: value
    }
}
