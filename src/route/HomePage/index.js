import Header from '../../component/Header';
import Home from '../../component/Home';
import Books from '../../component/Books';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const HomePage = () => {
    return(
        <Router>
            <Header/>
            <Routes>   
                <Route path='/' exact element={<Home />}></Route>
                <Route path='/books' exact element={<Books />}></Route>
            </Routes>
        </Router>
    );  
}

export default HomePage