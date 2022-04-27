import Header from './Header.component';
import { useState } from 'react';
import { connect } from 'react-redux';
import ThemeToggleDispacher from '../../store/ThemeToggle/ThemeToggle.dispatcher';
// import { themeToggleAction } from '../../store/ThemeToggle/ThemeToggle.action';
// import { useSelector, useDispatch } from 'react-redux';

export const mapStateToProps = (state) => ({
    themeToggler: state.themeToggleReducer.themeToggle  
})

/**
 * 
 * @param {*} dispatch 
 * @returns In this method we directly dispatching that action method by 
    importing themeToggleAction method in themeToggle.action file
 */

// export const mapDispatchToProps = (dispatch) => ({
//     themeToggerMethod: () => dispatch(themeToggleAction())
// })

/**
 * 
 * @param {*} dispatch 
 * @returns In this method we calling that dispatcher and then 
 * dipatching that action method using dipatcher method
 */
export const mapDispatchToProps = (dispatch) => ({
    themeToggerMethod: () => ThemeToggleDispacher.themeToggler(dispatch)
})

const HeaderContainer = (props) => {

    const containerFunctions = {
        ThemeChange: () => themeChange()
    }

    // const themeToggler = useSelector((state) => state.themeToggle)
    // console.log(themeToggler,"headerconatiner")
    // const dispatch = useDispatch();

    const containerProps = () => {
        const{ themeToggler } = props;
        return {
            themeToggler
        }
    }

    const themeChange = () => {
        const{ themeToggerMethod } = props;
        themeToggerMethod();
    }   

    return(
        <Header 
            {...containerFunctions}
            {...containerProps()}
        />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);