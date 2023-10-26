import bag from "../assets/bag.jpeg"
const ProductCard = () => {
  return (
    <div className="product-card-container" style={{height: "25rem", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", margin: "2rem 3.7rem", padding: "2rem", width: "20rem", borderRadius: "2rem", fontFamily: 'red hat display'}}>
        <img src={bag} alt="" style={{objectFit: "cover"}} height={300} width={300}/>
        <div style={{display: "flex",justifyContent: "space-between", alignItems: "center", width: "100%"}}>
        <div className="product-info" style={{display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center"}}>
            <p style={{color: "#B7B7B8"}}>Category</p>
            <h4 style={{color: "#000", fontSize: "1.5rem"}}>Product name</h4>
        </div>
        <button style={{borderRadius: '20rem', backgroundColor:'#635EF7', color: 'white'}}>Price</button>
        </div>

    </div>
  )
}

export default ProductCard