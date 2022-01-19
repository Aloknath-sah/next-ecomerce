import React from 'react';
import NextLink from 'next/link';
import {useRouter} from 'next/router';
import { Layout } from '../../components/Layout';
import { Button, Card, Grid, Link, List, ListItem, Typography } from '@material-ui/core';
import useStyles from '../../utils/styles';
import data from '../../utils/data';
import Image from 'next/image';

export default function ProductScreen() {
    const classes = useStyles();
    const router = useRouter();
    const { slug } = router.query;
    const product = data.products.find(a => a.slug === slug);
    if(!product) {
        return <div>Product not found</div>
    }
    return (
        <Layout title={product.name} description={product.description}>
            <div className={classes.section}>
                <NextLink href="/" passHref>
                    <Link>back</Link>
                </NextLink>
            </div>
            <Grid container spacing={1}>
                <Grid item md={6} xs={12} >
                    <Image src={product.image} alt={product.name} width={640} height={640} layout="responsive"></Image>
                </Grid>
                <Grid item md={3} xs={12}>
                    <List>
                    <ListItem>
                            <Typography component='h1'><b>{product.name}</b></Typography>
                        </ListItem>
                        <ListItem>
                            <Typography><b>category:</b> {product.category}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography><b>Brand:</b> {product.brand}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography><b> Rating:</b> {product.rating} stars ({product.numReviews} reviews)</Typography>
                        </ListItem>
                        <ListItem><b>Description: </b>
                            <Typography>
                                {product.description}
                            </Typography>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Card>
                        <List>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography><b>Price</b></Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>Rs.{product.price}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography><b>Status</b></Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>{product.countInStock > 0 ? 'In stock': 'unavailable' }</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Button fullWidth variant="contained" color="primary">
                                    Add to cart
                                </Button>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}
