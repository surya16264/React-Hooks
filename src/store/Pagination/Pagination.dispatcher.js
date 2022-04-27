import { previousPageAction, nextPageAction } from "./Pagination.action";

class PaginateDispatcher {
    previousPagePaginate(dispatch) {
        dispatch(previousPageAction());
    }   

    nextPagePaginate(dispatch) {
        dispatch(nextPageAction());
    }
}

export default new PaginateDispatcher()