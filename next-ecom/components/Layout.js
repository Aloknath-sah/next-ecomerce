import React from 'react';
import Head from 'next/head';
import { AppBar,Toolbar, Typography, Container } from '@material-ui/core';

export const Layout = () => {
    return (
        <div>
            <Head>
                <title>next ecommerce</title>
            </Head>
            <AppBar position="static">
                <Toolbar>
                    <Typography>Ecom</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
        </div>
    )
}
