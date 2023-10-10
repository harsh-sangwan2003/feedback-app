import React from 'react'
import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {

    return (
        <header style={{ backgroundColor: 'rgba(0,0,0,0.4)', color: '#ff6a95' }}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {

    text: 'Feedback UI',
}

Header.propTypes = {

    text: PropTypes.string,
}

export default Header
