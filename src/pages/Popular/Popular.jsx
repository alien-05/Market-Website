import { useEffect, useState } from 'react';
import './popular.css';
import products from '../../Assets/data/products'
import ProductCard from '../../helpers/ProductCard'

const Popular = () => {
    const [watches, setwatches] = useState(products)

    useEffect(() => {
        const filteredWatches = products.filter((product) => product.category === "watch")
        setwatches(filteredWatches)
    }, [])

    return (
        <div className='popular mt-5 mb-5'>
            <h1 className='fs-2 text-center text-capitalize mb-5'>popular in category</h1>
            <div className="container">
                <div className="row mb-5">
                    {watches.map((product, index) => {
                        return (
                            <div key={index} className="col-12 col-md-6 col-lg-3">
                                <ProductCard product={product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Popular