import { TOGGLE_THEME } from './ThemeToggle.action';

export const initialState = () => ({
    themeToggle: false
})

const themeToggleReducer = (state = initialState(), action) => {
    const{ type } = action;
    switch(type) {
        case TOGGLE_THEME: return {
                ...state,
                themeToggle: !state.themeToggle,
            };
        default: return state;
    }   
};

export default themeToggleReducer;