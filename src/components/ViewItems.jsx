import React from 'react'

export default function ViewItems() {
    return (
        <div className='container-fluid h-100' style={{ background: "#eef3fa" }}>
            <div className="row">
                <div className="col-7 m-auto my-5">
                    <div className='w-25 m-auto'>
                    <p className='mb-0 text-secondary'>Only The Best </p>
                    <p style={{ borderBottom: "2px solid orange", width: "30%",margin:"auto" }}></p>
                    </div>
                    <h2 className='my-3'>Fresh Ingredient, Tasty Meals</h2>
                    <p className='text-secondary' style={{lineHeight:"30px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga laboriosam, excepturi voluptate suscipit ducimus sed laborum perspiciatis deserunt sit delectus, eos iure error ea consequatur provident. Eos fugit obcaecati vero.</p>
                    <button style={{background:"#a37c0b"}} type="button" className="rounded-0 btn text-white">Veiw Item</button> 
                </div>
            </div>
        </div>
    )
}
