import React from 'react';
import "./LandingPage.css"
import Spline from '@splinetool/react-spline';

function App() {
    return (
        <div className="app">

            {/* Header */}
            <div className="header">
    <div className="logo">Rivly Logo</div>
    <div className="categories">24 Categories <span>View All</span></div>
    <input type="text" placeholder="I'm shopping for..." />
    <div className="user">Ryan</div>
</div>


<div className="main-content">

    <div className="spline-background">
    <Spline scene="https://prod.spline.design/DoljBMn3Nnq6Ap8H/scene.splinecode" />
    </div>
    
    <h1>Shop everything you need <br></br> online from the US <br></br> businesses <span className='love'>you love</span></h1> 

    <button>Join the Rivly United for FREE</button>
    <button>Shop all products</button>

</div>



        </div>
    );
}

export default App;
