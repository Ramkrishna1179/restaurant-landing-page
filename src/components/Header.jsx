
import React from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'react-dom'
export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white display-flex justify-content-between">
                <div className='ms-3'>

                    <a class="navbar-brand" href="/home">Restaurant Landing Page</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <ul class="navbar-nav me-5">
                    <li className="nav-item active">
                        <a className="nav-link me-3" href="/">Landing </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-3" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-3" href="/">Gallery</a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link me-3" href="/">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-3" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-3" href="/">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link me-3" href="/">Contact</a>
                    </li>
                    <li className="nav-item">
                        <FontAwesomeIcon icon={faCartShopping} style={{marginTop:"15px"}} />                            </li>


                </ul>
             
            </nav>


        </div>
    )
}
