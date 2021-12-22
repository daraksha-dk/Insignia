import hero from "assets/icons/hero.svg";

const MainContent = () => {
  return (
    <div className="MainContent">
      <div className="MainContent_about">
        <h1 className="about-heading">Save your data storage here.</h1>
        <p className="about-content">
          Insignia is a data storage area that has been tested for security, so
          you can store your data here safely but not be afraid of being stolen
          by others.
        </p>
        <button className="hero-cta">Learn more</button>
      </div>
      <div className="hero-img">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default MainContent;
