import axios from "axios"

export const updateData = (data) => {
    return (dispatch) => {
        socket.emit();
        axios.post('/update', data).then(function (response) {
            dispatch({ type: 'UPDATE_DATA', data });
        }).catch((error) => {
            console.log(error);
        });
    }
}


export const setURL = (data) => {
    return (dispatch) => {
        axios.post('/updateData', { data: data }).then(function (response) {
            dispatch({ type: 'UPDATE_DATA', data: data })
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
    }
}
