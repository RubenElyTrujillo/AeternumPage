import React from 'react'
import Head from 'next/head'
import Navbar from '../src/componets/Navbar/navbar'

export default function Template({ children, title }){
    return(
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className='outer-wrapper'>
                <Navbar />
                {children}
            </div>
        </>
    )
}