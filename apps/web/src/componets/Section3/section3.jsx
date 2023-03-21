import React from 'react'
import Image from 'next/image'
import BlockContent from "@sanity/block-content-to-react"
import { buildImages } from '../../../libs/complementos'
import { AE, Cryptocontador } from 'ui'
import { useInView } from "react-hook-inview"

export default function Section3({ section, section2 }){
    const [imgOne, imgOneView] = useInView({ threshold: 0, unobserveOnEnter: true });
    const [imgTwo, imgTwoView] = useInView({ threshold: 0, unobserveOnEnter: true });
    const [imgThree, imgThreeView] = useInView({ threshold: 0, unobserveOnEnter: true });
    return(
        <section className='block section3' id='section3'>
            <div className='holder'>
                <div className='container-fluid'>
                    <div className="col" ref={imgOne}>
                        <div className='col-6' >
                            <div className='firs-title'>
                                <span className={imgOneView ? "fadeInBottom" : ""}>Crash Course</span>
                            </div>
                            <div className='title'>
                                <h3 className={imgOneView ? "fadeInBottom" : ""}><BlockContent blocks={section?.title} /></h3>
                            </div>
                            <div className={`content ${imgOneView ? "fadeInBottom" : ""}`}>
                                <BlockContent blocks={section?.content} />
                            </div>
                            <a className={imgOneView ? "fadeInBottom" : ""} href="">
                                <span className="inner">
                                    <span className="normal">Saber Más</span>
                                    <span className="hover">Saber Más</span>
                                </span>
                            </a>
                        </div>
                        <div className='col-6'>
                            <div className={`imagen ${imgOneView ? "fadeIn" : ""}`} >
                                <Image src={buildImages(section.imagen.asset).url()} fill alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row" ref={imgTwo}>
                        <div className={`icon ${imgTwoView ? "fadeIn" : ""}`} >
                            <Image src={AE} alt='Logo AE' />
                        </div>
                    </div>
                    <div className='col' ref={imgThree}>
                        <div className='col-6'>
                            <div className={`criptocontador ${imgThreeView ? "fadeIn" : ""}`} >
                                <Image src={Cryptocontador} fill alt='Logo Criptocontador' />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className={`content other ${imgThreeView ? "fadeInBottom" : ""}`}>
                                <BlockContent blocks={section2?.content} />
                            </div>
                            <a href="">
                                <span className="inner">
                                    <span className="normal">Saber Más</span>
                                    <span className="hover">Saber Más</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}