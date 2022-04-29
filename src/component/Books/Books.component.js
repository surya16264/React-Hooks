import { useState, useEffect, useRef } from 'react';
import './Books.style.scss';

const Books = (props) => {
    const { currentPage, goNextPage, goPreviousPage, pageCalculation, changePerPage, totalPages } = props;

    const buttonRef = useRef();

    const [disable, setisDisable] = useState({
        isPrevDisable: false,
        isNextDisable: false
    });

    useEffect(() => {

        const prevBtnDisable = () => {
            (currentPage === 1) ? setisDisable((disable) => ({ ...disable, isPrevDisable: true })) : setisDisable((disable) => ({ ...disable, isPrevDisable: false }));
        }
        const nextBtnDisable = () => {
            (currentPage === totalPages) ? setisDisable((disable) => ({ ...disable, isNextDisable: true })) : setisDisable((disable) => ({ ...disable, isNextDisable: false }));
        }
        prevBtnDisable();
        nextBtnDisable();
    }, [currentPage, disable, totalPages])

    return (
        <>
            <div className='BooksContainer'>
                <div className='selectRange'>
                    <button onClick={(e) => changePerPage(e)} className='perPageButton' ref={buttonRef}>10</button>
                    <button onClick={(e) => changePerPage(e)} className='perPageButton' ref={buttonRef}>20</button>
                    <button onClick={(e) => changePerPage(e)} className='perPageButton' ref={buttonRef}>25</button>
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