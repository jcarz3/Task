import "../App.css";

import { NavLink, useNavigate } from "react-router-dom";
import pizza2 from "../images/pizza2.png";

const Home = () => {
  return (
    <div className="home">
      <div className="body">
        <div className="left-body">
          <h1 style={{ marginTop: "30px", textTransform: "uppercase" }}>
            Indulge <br />
            in a Slice of <br /> Italy.
          </h1>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "not-active")}
            to="/itemManagement"
          >
            <button>
              <h5>Order Now</h5>
            </button>
          </NavLink>
        </div>
        <div className="right-body">
          <img src={pizza2} alt="" />
          <h3>
            At A 4.20 Pizzeria, we're on a mission to transport you straight to
            the heart of Italy through the irresistible magic of pizza. Our home
            is a haven for pizza enthusiasts, where every slice tells a story of
            tradition, passion, and culinary artistry.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
