export default (state = {}, action) => {
    switch (action.type) {
        case 'UPDATE_CURRENT_USER':
            return action.payload
        default:
            return state
    }
}