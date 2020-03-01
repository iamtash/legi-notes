export default (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_BILL':
            return action.payload
        default:
            return state
    }
}