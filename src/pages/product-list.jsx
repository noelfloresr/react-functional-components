import React from 'react';
import {products} from '../data/products';

const ProductList = () => {
    return (
        <div>
            <h1>There are {products.length} products on inventory</h1>
        </div>
    )
}

export default ProductList;