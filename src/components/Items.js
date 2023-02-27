import React from 'react'

const Items = (props) => {
    let {title, description, image, price, rate} = props;
    return (
        
            <div className="card my-3">
                <img className="card-img-top" src={image} alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <h3>${price}</h3>
                        <p><small className='text-muted'>rate : {rate.rate} | count : {rate.count}</small></p>
                        <a href="/" className="btn btn-primary">Add Cart</a>
                    </div>
            </div>
       
    )
}

export default Items