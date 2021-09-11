import React from 'react'
import { Link } from 'react-router-dom'
const ErrorPage404 = () => {
   return (
      <div id="error-page">
         <div class="content">
            <h2 class="main-error" data-text="404">
               404
            </h2>
            <h4 data-text="Opps! Page not found">
               Ooopps! Page not found
            </h4>
            <p>
               Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
            </p>
            <button class="btn">
               <Link to="/">return home</Link>
            </button>
         </div>
      </div>
   )
}

export default ErrorPage404
