import "./about-us.css";
import leftPic from "../../images/left-pic.jpeg";

const AboutUsPage = () => {
  return (
    <div
      className="about-body"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div>
        <div
          className="left-about"
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <img
            src={leftPic}
            alt=""
            style={{ width: "400px", height: "500px" }}
          />
        </div>
        <div
          className="right-about"
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "column",
            padding: "40px",
          }}
        >
          <h1 style={{ fontSize: "30px", color: "orange", marginTop: "70px" }}>
            About Us
          </h1>
          <div style={{ marginRight: "100px" }}>
            <h1 style={{ fontSize: "22px" }}>
              At A 4.20 Pizzeria, we are passionate about crafting the most
              authentic and delicious Italian pizza experience you'll find this
              side of Italy. Our journey began with a deep-rooted love for the
              art of pizza-making, and today, we proudly bring that passion to
              your plate. Driven by a commitment to quality, flavor, and
              innovation, we have meticulously curated a menu that pays homage
              to the timeless traditions of Italian cuisine while infusing a
              creative twist inspired by modern culinary trends. Each pizza is a
              masterpiece, meticulously handcrafted with the finest, freshest
              ingredients that speak to the essence of Italy. Our team of
              talented pizzaiolos pours their heart and soul into every pie,
              ensuring that each bite encapsulates the rich heritage of Italian
              flavors. Whether you're a fan of the classic Margherita, crave the
              boldness of a Diavola, or yearn for the unexpected delight of our
              signature 4.20 Special, every slice promises a symphony of tastes
              that transport you to the sun-kissed landscapes of Italy.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
