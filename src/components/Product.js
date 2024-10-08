import React, { useEffect, useState } from 'react'
import Items from './Items';
import Spinner from './Spinner';

const Product = (props) => {
    const [loading, setLoading] = useState(false)
    const [prod, setProd] = useState([])
    const fetchapi = async () => {
        props.setProgress(10)
        let url = `https://fakestoreapi.com/${props.category}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30)
        let parsedata = await data.json();
        props.setProgress(70)
        setProd(parsedata)
        setLoading(false)
        props.setProgress(100)
    }
    const capitalize = str => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    useEffect(() => {
        document.title = `Ecommerce - ${capitalize(props.id)}`
        fetchapi();
        // eslint-disable-next-line
    }, [])
    return (
        <div className="container">
        <h3 style={{textAlign:"center", marginTop:"70px"}}>Ecommerce - Top {capitalize(props.id)} Items</h3>
            {loading && <Spinner />}
            <div className="container">
                <div className="row">
                    {prod.map((items) => {
                        return <div className="col-md-4" key={items.id}>
                            <Items title={items.title} description={items.description} image={items.image} price={items.price} rate={items.rating} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Product