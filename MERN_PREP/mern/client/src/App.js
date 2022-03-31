import React from 'react';

// using route to navigate to different pages
import {Route, Routes} from 'react-router-dom';

// importing components

import Navbar from './components/navbar';
import RecordList from './components/recordList';
import Create from './components/create';
import Edit from './components/edit';

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<RecordList />} />
                <Route path="/create" element={<Create />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </div>
    );
}

export default App;