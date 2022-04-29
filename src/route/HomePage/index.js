import React from 'react';
import Header from '../../component/Header';
import Home from '../../component/Home';
// import Books from '../../component/Books';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from '../../component/Loader';

const BooksPage = React.lazy(() => import('../../component/Books'));



const HomePage = () => {
    return(
        <Router>
            <Header/>
            <Routes>   
                <Route path='/' exact element={<Home />}></Route>
                <Route path='/books' exact element={<React.Suspense fallback={<Loader />}><BooksPage /></React.Suspense>}></Route>
            </Routes>
        </Router>
    );  
}

export default HomePage