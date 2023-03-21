import React from 'react'
import BlockContent from "@sanity/block-content-to-react"
import { useInView } from "react-hook-inview"

export default function Section2({ section }){
    const [ref, inView] = useInView({ threshold: 0, unobserveOnEnter: true });
    return(
        <section className='block section2' id='section2'>
            <div className="holder">
                <div className="container-fluid" ref={ref}>
                    <div className='partOne'>
                        <h3 className={inView ? "fadeInBottom" : ""}><BlockContent blocks={section?.sectionTwoContentPartOne} /></h3>
                    </div>
                    <div className='partTwo'>
                        <h3 className={inView ? "fadeInBottom" : ""}><BlockContent blocks={section?.sectionTwoContentPartTwo} /></h3>
                    </div>
                </div>
            </div>
        </section>
    )
}