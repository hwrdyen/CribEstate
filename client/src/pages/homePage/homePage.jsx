import "./homePage.scss";
import { useContext } from "react";
import SearchBar from "../../components/searchBar/searchBar";
import { AuthContext } from "../../context/AuthContext";

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Your ultimate destination for discovering the perfect property.
            Whether you are searching for a new home, investment property, or
            rental, our platform connects you with top listings tailored to your
            needs. With user-friendly search tools, expert advice, and a vast
            network of real estate professionals, we make the process of finding
            and securing your dream place seamless and enjoyable. Explore a
            world of possibilities with us and step into your future home today.
          </p>

          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
