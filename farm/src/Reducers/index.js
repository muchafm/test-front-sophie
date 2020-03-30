const initialState = {
    fields: []
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_FIELD':
        return {
        }
        default:
            return state
    }
} 

export default rootReducer