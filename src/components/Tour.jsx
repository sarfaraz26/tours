import React, { useState } from 'react'

const Tour = ({img, name, price, info, deleteTour}) => {
    const [text, setText] = useState(false);

    function changeText()
    {
        setText(!text);
    }

    return (
        <div className="card mb-4">
            <img src={img} alt="img" className="card-img-top" height="300" />
            <div className="card-body">
                <div className="flex-div">
                    <h5 className="card-title"><b>{name}</b></h5>
                    <p className="badge badge-pill py-2 px-3">${price}</p>
                </div>
                <p className="card-text">{text ? info.substring(0,info.length) : info.substring(0,200)}...<span className="text-info" onClick={changeText}>{text ? 'Read less' : 'Read more'}</span></p>
                <div className="text-center">
                    <button className="btn btn-outline-danger w-50" onClick={deleteTour}>Not interested</button>
                </div>
            </div>
        </div>
    )
}

export default Tour
