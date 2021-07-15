import React from 'react'
import { Header, Footer } from './Header'



export default function GeneralNav({ children, nav = true, footer = true, getStarted = true }) {
    return (
        <React.Fragment>
            <div>
                {nav && <Header getStarted={getStarted} />}
                {children}
                {footer && <Footer />}
            </div>
        </React.Fragment>
    )
}


