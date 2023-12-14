import React from 'react'

export default function WelcomePage() {
    return (
        <div className='container'>
            <div className="row my-5 display-flex justify-content-around">
                <div className='col-6 text-start'>
                    <p className='mb-0 text-secondary'>Our Story </p>
                    <div style={{borderBottom:"2px solid orange",width:"50px"}}></div>
                    <h2 className='mt-2'>Welcome To Royal</h2>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo possimus, rerum aliquid impedit omnis et iusto, atque veniam natus animi expedita repellendus sint cum reiciendis quos porro beatae, aspernatur excepturi!
                    Nam provident doloribus reprehenderit necessitatibus ullam ipsa illum? Alias, rem laborum temporibus architecto, cumque ex at itaque.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sapiente sequi quidem enim suscipit explicabo at impedit neque laudantium deleniti tempora.</p>
                </div>
         
                <div className="card p-4 border-0" style={{ width: "300px",height:"400px",background:"#eef3fa" }}>
                    <img className="card-img-top rounded-0 w-75 h-100 m-auto" src="https://www.mashed.com/img/gallery/top-10-restaurant-choices-for-vegetarians/intro.jpg" alt="Card image" />

                </div>
            </div>

        </div>
    )
}
