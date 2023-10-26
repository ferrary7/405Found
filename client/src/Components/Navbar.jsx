import { IoSearchOutline } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Styled component
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Navbar() {
  const navigate = useNavigate();

  // Fetching products on mount
  useEffect(() => {
    fetch("http://localhost:8000/products/")
      .then((resp) => resp.json())
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.error("Error Fetching data", e.message);
      });
  }, []);

  const user = localStorage.getItem("name");
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    // You might also want to force a re-render or redirect the user after logging out
  };

  return (
    <>
      <div className="main-container">
        <div className="header">
          <div className="glitch-wrapper">
            <div className="glitch" data-glitch="405 Found">
              405 Found
            </div>
          </div>
          <div className="categories">
            24 Categories <span>View All</span>
          </div>
          <div className="search-container">
            <input type="text" placeholder="I'm shopping for..." />
            <IoSearchOutline className="search-icon" />
          </div>
          <div className="cart-container">
            <StyledBadge badgeContent={1} color="secondary">
              <GrCart className="cart-icon" />
            </StyledBadge>
          </div>
          <div className="user">
            {token === null ? (
              <h2 onClick={() => navigate("/users/login", { replace: true })}>
                Login
              </h2>
            ) : (
              <h2 onClick={handleLogout}>{user}</h2>
            )}
          </div>
        </div>
        <div className="categories-container">
          <div className="categories"> Popular Products </div>
          <div className="categories"> Favourite Brands</div>
          <div className="categories">Best Deals</div>
          <div className="categories">Top Reviews</div>
          <div className="categories">Highest Rated</div>
          <div className="categories">Recently Viewed</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
