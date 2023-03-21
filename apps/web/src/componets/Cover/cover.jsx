import React from 'react'
import BlockContent from "@sanity/block-content-to-react"

export default function Cover({ section }){
    return(
        <section className='block cover' id='cover'>
            <video autoPlay muted loop playsInline className="video">
                <source src="/cover-aeternum.mp4" />
            </video>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className='title'>
                        <h1 className='fadeInBottom'><BlockContent blocks={section?.title} /></h1>
                    </div>
                    <div className='subtitle'>
                        <h2 className='fadeInBottom'><BlockContent blocks={section?.subtitle} /></h2>
                    </div>
                </div>
            </div>
        </section>
    )
}