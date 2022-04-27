import useFetch from "react-fetch-hook";
import Books from "./Books.component";
import { useState, useRef } from 'react';
import { connect } from 'react-redux';
import Loader from '../Loader';
import PaginateDispatcher from '../../store/Pagination/Pagination.dispatcher';
import { previousPageAction, nextPageAction } from '../../store/Pagination/Pagination.action';

export const mapStateToProps = (state) => ({
    currentPage: state.PaginateReducer.Page
})

/**
 * 
 * @param {*} dispatch 
 * @returns In this method we directly dispatching that action method by 
    importing themeToggleAction method in themeToggle.action file
 */
// export const mapDispatchToProps = (dispatch) => ({
//     goPreviousPage: () => dispatch(previousPageAction()),
//     goNextPage: () => dispatch(nextPageAction())
// })

/**
//  * 
//  * @param {*} dispatch 
//  * @returns In this method we calling that dispatcher and then 
//     dipatching that action method using dipatcher method
//  */
export const mapDispatchToProps = (dispatch) => ({
    goPreviousPage: () => PaginateDispatcher.previousPagePaginate(dispatch),
    goNextPage: () => PaginateDispatcher.nextPagePaginate(dispatch)
})


const BooksContainer = (props) => {
    const[perPage, setPerPage] = useState(10);
    const[totalPages, setTotalPages] = useState(perPage);
    const{ currentPage } = props;
    

    const containerFunctions = {
        pageCalculation: () => pageCalculation(),
        changePerPage: (val) => changePerPage(val)
    }

    const containerProps = () => {
        const{ goNextPage, goPreviousPage } = props;

        return {
            currentPage,
            goNextPage,
            goPreviousPage,
            totalPages
        }
    }

    const url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json';
    const { isLoading, error, data=[] } = useFetch(url);
    console.log(useFetch(url));

    if(isLoading) return <div><Loader isLoading={isLoading}/></div>
    if(error) return <div>{error.status}</div>

    const changePerPage = (val) => {
        setPerPage(val);
        const Books = data.slice(0,100);
        setTotalPages(Books.length/val);  
    }

    const pageCalculation = () => {
        let lastIndex = currentPage * perPage;
        let firstIndex = lastIndex - perPage;

        const Books = data.slice(0, 100);

        return (Books.slice(firstIndex, lastIndex)
            .map(book => {
                return (
                    <tr key={book.bookID}>
                        <td>{book.title}</td>
                        <td>{book.authors}</td>
                        <td>₹{book.price}</td>
                        <td>{book.average_rating}</td>
                    </tr>
                )
            })
        )
    }

    return(
        <Books 
            {...containerFunctions}
            {...containerProps()}
        />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer)