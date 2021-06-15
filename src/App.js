import React from 'react'
import TourList from './components/TourList';

const App = () => {
    return(
        <div className="container">
            <h1 className="text-center">Tours</h1>
            <div className="underline mb-3"></div>
            < TourList />
        </div>
    )
}

export default App;