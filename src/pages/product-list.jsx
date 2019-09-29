import React from 'react';
import {products} from '../data/products';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

const ProductList = () => {
    const list = products.map(product => 
        <Grid item lg={4} key={product.id}>
            <Card style={{margin: 10, minHeight: 400}}>
                <CardMedia style={{height: 200, backgroundSize: 'contain'}}
                    image={product.imageUrl}
                />
                <CardContent>
                    <h4>{product.title}</h4>
                </CardContent>
            </Card>
        </Grid>
    )
    const layoutStyle = {
        maxWidth: 1090, 
        margin: 'auto',
        marginTop: 50
    }
    return (
        <div style={layoutStyle}>
            <Grid container >
                {list}
            </Grid>
        </div>
    )
}

export default ProductList;