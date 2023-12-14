import React from 'react'

export default function NewsEvents() {
    return (
        <div className='container-fluid bg-light'>
            <div className="container mt-5">

                <div className="row">
                    <div className='w-25 m-auto mt-5'>
                        <p className='mb-0 text-secondary'>Don't Miss</p>
                        <p style={{ borderBottom: "2px solid #c19442", width: "30%", margin: "auto" }}></p>
                    </div>

                </div>
                <div className='w-75 m-auto'>

                    <h3 className='my-4'>Our News And Events</h3>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic eius modi inventore numquam corporis rerum quidem adipisicing elit.</p>
                </div>

               {/* <div className="container"> */}
                 <div className="row">
                    <div className="col-4">
                        <div class="card rounded-0">
                            <img class="card-img-top rounded-0" src="https://www.mashed.com/img/gallery/top-10-restaurant-choices-for-vegetarians/intro.jpg" alt="Card image" />
                            <div class="card-body">
                                <p class="card-title text-start">Nunc Volutpat Venenatis</p>
                                <p className='text-start text-warning mb-1'>Category</p>
                                <p class="card-text text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod eos, magnam illum laborum dicta iusto voluptate odit debitis hic nemo perferendis? Laborum, eum soluta ea at ipsum sit a consectetur.debitis hic nemo perferendis? Laborum, eum soluta ea at ipsum sit a consectetur.</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div class="card rounded-0">
                            <img class="card-img-top rounded-0" src="https://www.mashed.com/img/gallery/top-10-restaurant-choices-for-vegetarians/intro.jpg" alt="Card image" />
                            <div class="card-body">
                                <p class="card-title text-start">Nunc Volutpat Venenatis</p>
                                <p className='text-start text-warning mb-1'>Category</p>
                                <p class="card-text text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod eos, magnam illum laborum dicta iusto voluptate odit debitis hic nemo perferendis? Laborum voluptate odit debitis?</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div class="card rounded-0">
                            <img class="card-img-top rounded-0" src="https://www.mashed.com/img/gallery/top-10-restaurant-choices-for-vegetarians/intro.jpg" alt="Card image" />
                            <div class="card-body">
                                <p class="card-title text-start">Nunc Volutpat Venenatis</p>
                                <p className='text-start text-warning mb-1'>Category</p>
                                <p class="card-text text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod eos, magnam illum laborum dicta iusto voluptate odit debitis hic nemo perferendis? Laborum voluptate odit debitis?</p>

                            </div>
                        </div>
                    </div>



                </div>
               {/* </div> */}

               <button style={{background:"#a37c0b"}} type="button" className="rounded-0 my-5 btn text-white">Read More</button>
            </div>

        </div>
    )
}
