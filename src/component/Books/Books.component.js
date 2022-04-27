import { useState, useEffect } from 'react';
import './Books.style.scss';

const Books = (props) => {
    const { currentPage, goNextPage, goPreviousPage, pageCalculation, changePerPage, totalPages } = props;

    const [disable, setisDisable] = useState({
        isPrevDisable: false,
        isNextDisable: false
    });

    useEffect(() => {

        const prevBtnDisable = () => {
            (currentPage === 1) ? setisDisable({ ...disable, isPrevDisable: true }) : setisDisable({ ...disable, isPrevDisable: false });
        }
        const nextBtnDisable = () => {
            (currentPage === totalPages) ? setisDisable({ ...disable, isNextDisable: true }) : setisDisable({ ...disable, isNextDisable: false });
        }
        prevBtnDisable();
        nextBtnDisable();
    }, [currentPage, disable, totalPages])

    return (
        <>
            <div className='BooksContainer'>
                <div className='selectRange'>
                    <button onClick={() => changePerPage(10)} className='perPageButton' >10</button>
                    <button onClick={() => changePerPage(20)} className='perPageButton' >20</button>
                    <button onClick={() => changePerPage(25)} className='perPageButton' >25</button>
                </div>
                <div className="Recipes">
                    <table >
                        <thead>
                            <tr>
                                <th>Book name</th>
                                <th>Author name</th>
                                <th>Price</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pageCalculation()}
                        </tbody>
                    </table>
                    <div className='pagination-buttons'>
                        <button className='pervious-button' disabled={disable.isPrevDisable} onClick={goPreviousPage}>Previous</button>
                        <span className='current-page'>{currentPage}</span>
                        <button className={`next-button ${disable.isNextDisable ? 'disabled': ''}`} disabled={disable.isNextDisable} onClick={goNextPage}>Next</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Books