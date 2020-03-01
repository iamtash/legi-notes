import propublica from '../apis/propublica.js'
import server from '../apis/server.js'

export const signIn = () => {
    return { type: 'SIGN_IN' }
}

export const signOut = () => {
    return { type: 'SIGN_OUT' }
}

export const updateCurrentUser = (id, email, avatar) => {
    return {
        type: 'UPDATE_CURRENT_USER',
        payload: { id, email, avatar }
    }
}

export const signInActions = (idtoken, email, avatar) => async dispatch => {
    const response = await server.post('/users', { idtoken })
    const userId = response.data.id

    if (email === response.data.email) {
        dispatch(signIn())
        dispatch(updateCurrentUser(userId, email, avatar))
        dispatch(getCases(userId))
    } else {
        console.log('User not authorized')
    }
}

export const getBills = term => async dispatch => {
    dispatch({ type: 'FETCHING_BILLS'})

    const response = await propublica.get('/search.json', {
        params: {
            query: term
        }
    })
 
    dispatch({ 
        type: 'GET_BILLS',
        payload: response.data.results[0].bills
    })
}

export const getCases = userId => async dispatch => {
    const response = await server.get('cases', {
        params: { user_id: userId }
    })
    console.log(response)
    dispatch({
        type: 'GET_CASES',
        payload: response.data
    })
}

export const selectBill = bill => {
    return { type: 'SELECT_BILL', payload: bill }
}

export const createBookmarkAndCase = data => async dispatch => {
    const response = await server.post('/bookmarks', {
        bookmark: data
    })
    console.log(response)
    
    const { bill_number, url } = response.data
    const bookmarks = [ { id: response.data.id, bill_number, url } ]
    const { number, title, client } = response.data.case
    const kase = { id: response.data.case.id, number, title, client, bookmarks }

    dispatch({ type: 'CREATE_BOOKMARK_AND_CASE', payload: kase })
}

export const addBookmarkToCase  = data => async dispatch => {
    const response = await server.post('/bookmarks', {
        bookmark: data
    })
    console.log(response)

    const { id, bill_number, url } = response.data

    const bookmark = {
        id,
        bill_number,
        url
    }

    dispatch({ 
        type: 'ADD_BOOKMARK_TO_CASE',
        payload: { caseId: response.data.case_id, bookmark }
    })
}