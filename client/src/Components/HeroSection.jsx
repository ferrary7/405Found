import Spline from "@splinetool/react-spline";

function HeroSection() {
  return (
    <div className="main-content">
        <div className="spline-background">
          <Spline scene="https://prod.spline.design/DoljBMn3Nnq6Ap8H/scene.splinecode" />
        </div>

        <h1>
          Shop everything you need <br></br> online from the US <br></br>{" "}
          businesses <span className="love">you love</span>
        </h1>

        <button>Join the Rivly United for FREE</button>
        <button>Shop all products</button>
      </div>
  )
}

export default HeroSection