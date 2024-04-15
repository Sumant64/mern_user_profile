export const initialState = localStorage.getItem('token') ? true: null;

export const reducer = (state, action) => {
    if(action.type === 'USER') {
        return action.payload;
    }

    return state;
}