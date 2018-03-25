import React from 'react';

const dataupdate = (state = { url: '', data: '' }, action) => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return Object.assign({}, state, { data : action.data });
        default:
            return state;
    }
}

export default dataupdate;