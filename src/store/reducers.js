import { combineReducers } from "redux";
import themeToggleReducer from './ThemeToggle/ThemeToggle.reducer';
import PaginateReducer from './Pagination/Pagination.reducer';

const Reducers = combineReducers({
    themeToggleReducer: themeToggleReducer,
    PaginateReducer: PaginateReducer  
});

export default Reducers;