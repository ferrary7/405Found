// import ProductCard from "./ProductCard"

import bag from "../assets/bag.jpeg"
import chair from "../assets/chair.png"

const ExploreProducts = () => {
  return (
    <div className="explore-products-cont">
      <div className="explore-left">
        <h1>
          Explore
          <br />
          Products
        </h1>
        <div className="explore-left-box">
          <h2>LOVE THE SWIM YOU ARE IN</h2>
          <button>View All</button>
        </div>
        <div className="explore-left-box" style={{backgroundColor:  "#FBEDAF", justifyContent: "center"}}>
        <div className="right" style={{display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%"}}>
            <span style={{backgroundColor: "white", width: "2.5rem",height: "2.5rem" , borderRadius: "15px", display: "flex", justifyContent: "center", alignItems: "center", marginRight: "2rem"}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M3.79167 9.20832L9.20834 3.79166"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.79167 3.79166H9.20834V9.20832"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <div className="left" style={{display: "flex",flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start",width: "100%", gap: "0"}}>
            <h2 style={{fontSize: "2.2rem",marginLeft:"2rem"}}>Love the swim<br/> you are in</h2>
            <button>Shop Now</button>
          </div>

        </div>
        <div className="explore-small-box-cont">
          <div className="explore-small-box">
            <img src={bag} alt="" style={{objectFit: "cover"}} height={200} width={200}/>
            <div style={{display: "flex",justifyContent: "space-between", alignItems: "center", width: "100%"}}>
        <div className="product-info" style={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
            <h4 style={{color: "#000", fontSize: "1.3rem"}}>Style Designer<br/> bags</h4>
            <p style={{color: "#B7B7B8", fontWeight: "lighter", fontSize: "0.8rem"}}>Shop Now</p>
        </div>
        <button style={{borderRadius: '20rem', backgroundColor:'#635EF7', color: 'white'}}>Rs. 7,999</button>
        </div>
          </div>
          <div className="explore-small-box" style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px", width:"16rem", height: "16rem", gap:"1rem"}}>
            <div className="row1">
              <span>Clothing</span>
              <span>Accessories</span>
            </div>
            <div className="row1">
              <span>Baby</span>
              <span>Pets</span>
              <span>School</span>
            </div>
            <div className="row1">
              <span>Handmade</span>
              <span>Garden & Patio</span>
            </div>
            <div className="row2" style={{marginTop: "2rem", width:"100%", display:"flex",justifyContent:"flex-start"}}>
              <p style={{fontSize:"10px", marginLeft: "1rem", fontWeight:"lighter"}}>View All Categories</p>
            </div>
          </div>
        </div>
      </div>

      <div className="explore-right">
        <div className="empty-cont" style={{height: "11.5rem"}}></div>
        <div className="top">

        <div className="explore-small-box" style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px", height: "30rem", width: "20rem"}}>
            <img src={bag} alt="" style={{objectFit: "cover"}} height={200} width={200}/>
            <div style={{display: "flex",justifyContent: "space-between", alignItems: "center", width: "100%"}}>
        <div className="product-info" style={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
            <h4 style={{color: "#000", fontSize: "1.3rem"}}>Style Designer<br/> bags</h4>
            <p style={{color: "#B7B7B8", fontWeight: "lighter", fontSize: "0.8rem"}}>Shop Now</p>
        </div>
        <button style={{borderRadius: '20rem', backgroundColor:'#635EF7', color: 'white'}}>Rs. 7,999</button>
        </div>
          </div>
          <div className="explore-small-box" style={{boxShadow: "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px", height: "30rem", width: "20rem"}}>
            <img src={bag} alt="" style={{objectFit: "cover"}} height={200} width={200}/>
            <div style={{display: "flex",justifyContent: "space-between", alignItems: "center", width: "100%"}}>
        <div className="product-info" style={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
            <h4 style={{color: "#000", fontSize: "1.3rem"}}>Style Designer<br/> bags</h4>
            <p style={{color: "#B7B7B8", fontWeight: "lighter", fontSize: "0.8rem"}}>Shop Now</p>
        </div>
        <button style={{borderRadius: '20rem', backgroundColor:'#635EF7', color: 'white'}}>Rs. 7,999</button>
        </div>
          </div>
        </div>
        <div className="bottom">
          {/* <ProductCard /> */}
          <div className="bottom-card" style={{width:"45rem", display:"flex", height:"14rem", backgroundColor:"#E3EAFC", borderRadius:"3rem", justifyContent:"center", alignItems:"center"}}>
            <div className="left" >
                <h1>Find the best<br/>furniture</h1>
                <p>Shop Now</p>
            </div>
            <div className="right">
                <img src={chair} alt="" width={200}/>
            </div>
          </div>
        </div>
      </div>
      {/* <ProductCard/> */}
    </div>
  );
};

export default ExploreProducts;
