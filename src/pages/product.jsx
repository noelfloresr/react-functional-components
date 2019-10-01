import React from 'react';
import { useParams} from "react-router";

const ProductDetail = () => {
    console.log(useParams());
    const {id} = useParams();
    return (
        <div>
            <h1>Id: {id}</h1>
        </div>
    )
}

export default ProductDetail;