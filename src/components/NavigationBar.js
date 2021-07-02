import React from 'react'

const NavigationBar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container justify-content-center">
                    <span className="navbar-brand">{props.title}</span>
                </div>
            </nav>
        </div>
    )
}

export default NavigationBar
