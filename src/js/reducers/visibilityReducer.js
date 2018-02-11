export default (state = "SHOW_ALL", action) => {
    switch (action.type) {
        case "CHANGE_VISIBILITY_FILTER":
            return action.visibilityFilter;
        default:
            return state;
    }
}
