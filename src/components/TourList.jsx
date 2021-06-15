import React, { useEffect, useState } from 'react'
import Tour from './Tour'
import Loading from './Loading';

const TourList = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(false);

    function fetchTours()
    {
        setLoading(true);
        fetch('https://course-api.com/react-tours-project')
        .then(res=>res.json())
        .then(data=>{
            setLoading(false);
            setTours(data);
        })
    }

    useEffect(()=>{
        fetchTours();
    },[])

    function deleteTour(id)
    {
        let modifiedTours = tours.filter((element,index)=>{
            return index !== id;
        })
        setTours(modifiedTours);
    }
    
    if(loading)
    {
        return(
            <Loading />
        )
    }

    if(tours.length === 0)
    {
        return(
            <div className="container text-center">
                <button className="btn btn-info w-25" onClick={fetchTours}>Refresh</button>
            </div>
        )
    }

    return (
        <>
            {tours.map((tour, index)=>{
                return <Tour key={index} img={tour.image} name={tour.name}
                 price={tour.price} info={tour.info} deleteTour={()=>{deleteTour(index)}} />
            })}
        </>
    )
}

export default TourList
