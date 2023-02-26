import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div className="container text-secondary my-5">
            <h2>Page not found!</h2>
            <p>Please go back to <u><Link to="/" className="text-dark text-underline">Home</Link></u></p>
        </div>
    )
}

export default PageNotFound
export { PageNotFound }
