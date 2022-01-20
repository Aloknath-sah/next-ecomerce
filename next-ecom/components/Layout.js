import React, { useContext } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar,Toolbar, Typography, Container, Link, Badge } from '@material-ui/core';
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';

export const Layout = ({title, description, children}) => {
    const { state } = useContext(Store);
    const { cart } = state;
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>{title? `${title} - next ecommerce`: 'next ecommerce'}</title>
                {description && <meta name="description" content={description}></meta>}
            </Head>
            <AppBar position="static" className={classes.navbar} >
                <Toolbar>
                    <NextLink href="/" passHref>
                        <Link>
                            <Typography className={classes.brand}>Ecom</Typography>
                        </Link>
                    </NextLink>
                    <div className={classes.grow}></div>
                    <div>
                        <NextLink href="/cart" passHref>
                            
                            <Link>
                                {cart.cartItems.length > 0 ? (
                                    <Badge
                                    color="secondary"
                                    badgeContent={cart.cartItems.length}
                                    >
                                    Cart
                                    </Badge>
                                ) : (
                                    'Cart'
                                )}
                            </Link>
                        </NextLink>
                        <NextLink href="/login" passHref>
                            <Link>Login</Link>
                        </NextLink>
                    </div>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>
                {children}
            </Container>
            <footer className={classes.footer}>
                <Typography>All rights reserved.</Typography>
            </footer>
        </div>
    )
}
