import React from 'react';
import Link from 'next/link';

import Header from './Header';
import Head from 'next/head';

const Layout = props => {
    return ( 
        <>
            <Head>
                <html lang="es" />
                <title>Product Hunt Firebase y Next</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet"/> 
                <link href="/styles/app.css" rel="stylesheet" />
            </Head>

            <Header />
            
            <main>
                {props.children}
            </main>
        </>
     );
}
 
export default Layout;