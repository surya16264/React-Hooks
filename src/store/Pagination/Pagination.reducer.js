import { PREVIOUS_PAGE, NEXT_PAGE } from "./Pagination.action";

const initialState = {
    Page: 1
}

const PaginateReducer = (state=initialState, action) => {
    const{ type } = action;
    switch(type) {
        case PREVIOUS_PAGE: return {
            ...state,
            Page: state.Page - 1
        }

        case NEXT_PAGE: return {
            ...state,
            Page: state.Page + 1
        }

        default: return state
    }
}

export default PaginateReducer