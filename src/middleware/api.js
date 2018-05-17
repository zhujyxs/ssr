import 'isomorphic-fetch';

export function callApi(url, params) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json; charset=UTF-8');

    return fetch(url)
        .then(res => {
            return res.json();
        })
}

export default store => next => action => {
    if(action.isNet)
        return callApi(action.url, action.params).then(
            res => {
                next({
                res: res,
                type: action.type
            });}
        );
    else return next({ res: action.res, type: action.type });
};