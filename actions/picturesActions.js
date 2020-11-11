export function picturesFetch(){
    return function (dispatch) {
        dispatch(taskRequestStart());
        fetch("https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0", {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        })
            .then(res => res.json())
            .then(data => {

                dispatch(taskRequestSuccess(data))
            })
            .catch(error => dispatch(taskRequestFailure(error)));
    }
}

export function taskRequestStart(){
    return { type: 'PICTURES_REQUEST_START' };
}

export function taskRequestSuccess(pictures){
    return { type: 'PICTURES_REQUEST_SUCCESS', pictures: pictures }
}

export function taskRequestFailure(error) {
    return { type: 'PICTURES_REQUEST_FAILURE', error: error }
}