// const themeDispacher = (dispatch) => {
//       const themeToggleDispatcher = () => {
//           console.log("ThemeToggleDispatcher")
//       }
// }   

// export default themeDispacher;

import { themeToggleAction } from './ThemeToggle.action';

class ThemeToggleDispacher {
    themeToggler(dispatch) {
        dispatch(themeToggleAction());
    }
}

export default new ThemeToggleDispacher()