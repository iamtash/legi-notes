import propublica from '../apis/propublica.js'

export const signIn = () => {
    return { type: 'SIGN_IN' }
}

export const signOut = () => {
    return { type: 'SIGN_OUT' }
}

export const getBills = term => async dispatch => {
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