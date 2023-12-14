import React from 'react';

const HomePage = () => {
    const backgroundImageUrl = 'https://www.8ways.ch/application/files/9415/0874/4507/restaurant_1.jpeg';

    const divStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '500px',
        display: "flex",
        justuifyContent: "center",
        alignItems: "center"
    };

    return (
        <div style={divStyle} id="home">
            <div className='w-75 m-auto'>
                <h2 className='text-white'> Only Quality Food</h2>
                <p className='text-secondary mx-auto'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, sequi quaerat aliquam deserunt praesentium architecto! Tempore eum quia excepturi nam facere aliquid vel soluta saepe odio, nisi labore incidunt cupiditate  nam facere aliquid vel soluta saepe odio, nisi labore incidunt cupiditate?
                </p>
                <div>
                    <button style={{border:"1px solid white"}} type="button" className="me-2 btn rounded-0 text-white btn-outline-secondary">VEIW MENU</button>                
                    <button style={{background:"#f5d77f"}} type="button" className="rounded-0 btn">RESERVATION</button>  </div>
            </div>
        </div>
    );
};

export default HomePage;
