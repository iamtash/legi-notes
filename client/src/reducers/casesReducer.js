export default (state = [], action) => {
    switch (action.type) {
        case 'GET_CASES':
            return action.payload
        case 'ADD_BOOKMARK_TO_CASE':
            return state.map(kase => {
                if (kase.id === action.payload.caseId) {
                    return {
                        ...kase,
                        bookmarks: [ ...kase.bookmarks, action.payload.bookmark ]
                    }
                } else {
                    return kase
                }
            })
        case 'CREATE_BOOKMARK_AND_CASE':
            return [ ...state, action.payload ]
        default:
            return state
    }
}