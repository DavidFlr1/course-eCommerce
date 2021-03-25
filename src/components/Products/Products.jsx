import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

import useStyles from './styles'

/*const products = [
    {id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/449c838942da409f8ba9a97f00d3cffe_9366/Runfalcon_Shoes_Black_F36199_01_standard.jpg'},
    {id: 2, name: 'Macbook', description: 'Apple macbook', price: '$10', image: 'https://doto.vteximg.com.br/arquivos/ids/157780-1200-1200/apple-macbook-air-13.3-128gb-i5-8gb-ram-plata-dotomexico-froontview.jpg?v=https://www.costco.com.mx/medias/sys_master/products/h60/h14/32869878399006.jpg'}
]*/

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product) =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;