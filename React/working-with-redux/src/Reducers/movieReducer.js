export default function movieReducer(store, action) {
    store = [10, 20, 30, 40];
    if(action.type === "SA, VE_MOVIES") {
        return action.payload;
    }

    if(action.type === "DELETE_MOVIES") {
        return [];
    }

    if(action.type === "SAVE_EMPLOYEES") {
        return [10, 20, 30, 40, 50, 60];
    }

    return store;
}