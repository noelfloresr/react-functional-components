import React, { useState } from 'react';
import {products} from '../data/products';
import  '../styles/main.scss'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Link } from "react-router-dom";

const ProductList = () => {
    const [localProductList, setLocalProductList] = useState(products);
    console.log(localProductList);

    const removeItem = id => {
        const newLocalProductList = [...localProductList];
        const index = newLocalProductList.findIndex(item => item.id === id);
        newLocalProductList.splice(index, 1);
        setLocalProductList(newLocalProductList);
    }
    const list = localProductList.map(product => 
        <Grid item lg={4} key={product.id}>
            <Card style={{margin: 10, minHeight: 400}}>
                <CardMedia style={{height: 200, backgroundSize: 'contain'}}
                    image={product.imageUrl}
                />
                <CardContent>
                    <h4>{product.title}</h4>
                </CardContent>
                <Link to={`/products/${product.id}`} >Read more</Link>
                <button onClick={() => removeItem(product.id)}>Remove this item</button>
            </Card>
        </Grid>
    )

    return (
        <div className="grid-container">
            <Grid container >
                {list}
            </Grid>
        </div>
    )
}

export default ProductList;