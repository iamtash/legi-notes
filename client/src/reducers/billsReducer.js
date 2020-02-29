export default (state = [], action) => {
    switch (action.type) {
        case 'GET_BILLS':
            return action.payload 
        default: 
            return state
    }
}