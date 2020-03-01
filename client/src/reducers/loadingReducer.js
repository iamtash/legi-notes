export default (state = {}, action) => {
    switch(action.type) {
        case 'FETCHING_BILLS':
            return { ...state, bills: true }
        case 'GET_BILLS':
            return { ...state, bills: false }
        default:
            return state
    }
}