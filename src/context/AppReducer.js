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
        case "ADD_VIDEO":
            return {
                ...state,
                video: [action.payload, ...state.video]
            }
        default:
            return state;

    }
}