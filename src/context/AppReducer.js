export default (state, action) => {
    switch (action.type) {
        case "ADD_TO_LIST":
            return {
                ...state,
                list: [action.payload, ...state.list],
            };
        case "REMOVE_FROM_LIST":
            return {
                ...state,
                list: state.list.filter(movie => movie.id !== action.payload),
            }
        default:
            return state;
    }
}