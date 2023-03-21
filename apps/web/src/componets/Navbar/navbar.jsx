import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { AeternumLogo } from 'ui'

export default function Navbar(){
    const [isScroll, setIsScroll] = useState(false)
    const [checked, setChecked] = useState(false)
    const changeNavbarScroll = () =>{
        if(window.scrollY >= 80){
            setIsScroll(true)
        } else {
            setIsScroll(false)
        }
    }
    useEffect(() => {
        changeNavbarScroll()
        window.addEventListener('scroll', changeNavbarScroll)
    })
    return(
        <div className={`navigation ${checked ? 'isChecked' : ''} ${isScroll ? 'scroll' : ''}`}>
            <div className='holder'>
                <div className='container-fluid nav'>
                    <div className='logo'>
                        <Image src={AeternumLogo} alt='' priority fill sizes="(max-width: 768px) 100vw" />
                    </div>
                    <input id="nav-toggle" type="checkbox" onClick={() => setChecked(!checked)} />
                    <ul className='links'>
                        <li>
                            <a href="">
                                <span className='inner'>
                                    <span className="normal">CRASH COURSE</span>
                                    <span className="hover">CRASH COURSE</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="inner">
                                    <span className="normal">CRYPTOCONTADOR</span>
                                    <span className="hover">CRYPTOCONTADOR</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="inner">
                                    <span className="normal">SERVICIOS</span>
                                    <span className="hover">SERVICIOS</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="inner">
                                    <span className="normal">ACERCA DE</span>
                                    <span className="hover">ACERCA DE</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="inner">
                                    <span className="normal">BLOG</span>
                                    <span className="hover">BLOG</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="inner">
                                    <span className="normal">CONTACTO</span>
                                    <span className="hover">CONTACTO</span>
                                </span>
                            </a>
                        </li>
                    </ul>
                    <label htmlFor="nav-toggle" className="icon-burger">
                        <div className='line'></div>
                        
                        <div className='line'></div>
                    </label>
                </div>
            </div>
        </div>
    )
}