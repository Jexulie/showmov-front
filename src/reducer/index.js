const initialState = {
    error: null,
    loading: true,
    fetchedDate: null,
    movies: [],
    comingsoons: []
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'FETCH_MOVIES':
            return {
                ...state,
                fetchedDate: new Date().toLocaleDateString(),
                movies: action.movies
            }
        case 'FETCH_COMINGSOONS':
            return {
                ...state,
                comingsoons: action.comingsoons,
                loading: false
            }
        case 'CREATE_ERROR':
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default reducer; 