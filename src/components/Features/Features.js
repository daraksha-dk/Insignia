import React from "react";
import search from "assets/icons/search.svg";
import { ReactComponent as ArrowIcon } from "assets/icons/arrow.svg";
import print from "assets/icons/print.svg";
import security from "assets/icons/security.svg";
import TinySlider from "tiny-slider-react";

const settings = {
  lazyload: true,
  nav: true,
  mouseDrag: true,
  loop: false,
  dots: true,
  controls: false,
  navPosition: "bottom",
  speed: 500,
  gutter: 1,
  touch: true,
  swipeAngle: 180,
  items: 2,
  autoplayTimeout: 2500,
};

const features = [
  {
    title: "Search Data",
    desc: "Don’t worry if your data is very large, Insignia provides a search engine, which is useful for making it easier to find data effectively saving time.",
    icon: search,
    cls: "search-box",
  },
  {
    title: "Print Out",
    desc: "Print out service gives you convenience if someday you need print data, just edit it all and just print it.",
    icon: print,
    cls: "print-box",
  },
  {
    title: "Security Code",
    desc: "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.",
    icon: security,
    cls: "security-box",
  },
];

const Features = () => {
  // render each feature
  const renderFeatures = features.map(({ title, desc, icon, cls }) => {
    return (
      <div className={`feature ${cls}`} key={cls}>
        <div className="feature-icon">
          <img src={icon} alt={title} />
        </div>
        <div className="feature-content">
          <h3 className="title">{title}</h3>
          <p className="desc">{desc}</p>
          <button className="cta">
            Learn more
            <ArrowIcon />
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="Features">
      <h1 className="heading">Features</h1>
      <div className="features-list">
        <TinySlider settings={settings}>{renderFeatures}</TinySlider>
      </div>
    </div>
  );
};

export default Features;
