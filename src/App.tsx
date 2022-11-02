import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Shop from '../pages/Shop';

type AppProps = {
    
};

const App:React.FC<AppProps> = () => {
    
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/Shop' element={<Shop/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App;