import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faCartShopping } from '@fortawesome/free-solid-svg-icons'
export default function Testimonials() {
    return (
        <div className='container-fluid'>
            <div className="container mx-4">
                <div className="row my-5">
                    <div className='w-25 m-auto'>
                        <p className='mb-0 text-secondary'>Testimonials</p>
                        <p style={{ borderBottom: "2px solid #c19442", width: "30%", margin: "auto" }}></p>
                    </div>

                </div>
                <h2>What People are saying</h2>

                <div className="row mt-5">
                    <div className="col-3 px-5 text-start">
                        <div className='display-flex justify-content-around w-50'>
                            <FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} />
                        </div>
                        <p className='my-4 font-family-serif'>"A Great Find"</p>

                        <p className='text-secondary'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia illum aliquam corporis, maiores esse quae fugiat quis officiis rerum laboriosam quidem enim deleniti suscipit soluta minima quam sunt laborum minus"</p>
                        <h6>DIVI</h6>
                    </div>

                    <div className="col-3 px-5 text-start">
                        <div className='display-flex justify-content-around w-50'>
                            <FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} />
                        </div>
                        <p className='my-4'>"Fabulous Food & Flawless Service"</p>

                        <p className='text-secondary'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia illum aliquam corporis, maiores esse quae fugiat quis officiis rerum laboriosam quidem enim deleniti suscipit soluta officiis laboriosam"</p>
                        <h6>Bloom</h6>
                    </div><div className="col-3 px-5 text-start">
                        <div className='display-flex justify-content-around w-50'>
                            <FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} />
                        </div>
                        <p className='my-4'>"Another Successfull Experience"</p>

                        <p className='text-secondary'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia illum aliquam corporis, maiores esse quae fugiat quis officiis rerum laboriosam quidem enim deleniti suscipit soluta minima quam sunt laborum minus"</p>
                        <h6>Extra</h6>
                    </div><div className="col-3 px-5 text-start">
                        <div className='display-flex justify-content-around w-50'>
                            <FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#c19442" }} />
                        </div>
                        <p className='my-4'>"Speechless"</p>

                        <p className='text-secondary'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia illum aliquam corporis, maiores esse quae fugiat quis officiis rerum laboriosam quidem"</p>
                        <h6>Monarch</h6>
                    </div>
                </div>
            </div>

        </div>
    )
}
