import Men from "assets/icons/men.svg";
import Female from "assets/icons/female.svg";
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

const Testimonial = () => {
  return (
    <div className="test">
      <h1 className="test-head">Testimonials</h1>
      <div className="test-content">
        <TinySlider settings={settings}>
          <div className="test-content-box">
            <div className="img">
              <img src={Men} alt="men" />
            </div>
            <div className="bio">
              <div className="bio-header">
                <div>
                  <h1 className="name">John Fang</h1>
                  <h3 className="title">Web Designer</h3>
                </div>

                <div className="ratings">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="cle"></div>
                </div>
              </div>

              <p className="para">
                Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                aenean nam laoreet nulla.
              </p>
            </div>
          </div>
          <div className="test-content-box">
            {" "}
            <div className="img">
              <img src={Female} alt="female" />
            </div>
            <div className="bio">
              <div className="bio-header">
                <div>
                  <h1 className="name">Jenny Doe</h1>
                  <h3 className="title">UX Designer</h3>
                </div>
              </div>

              <div className="ratings">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
              <p className="para">
                Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                aenean nam laoreet nulla.
              </p>
            </div>
          </div>

          <div className="test-content-box">
            <div className="img">
              <img src={Men} alt="men" />
            </div>
            <div className="bio">
              <div className="bio-header">
                <div>
                  <h1 className="name">John Fang</h1>
                  <h3 className="title">Web Designer</h3>
                </div>

                <div className="ratings">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="cle"></div>
                </div>
              </div>

              <p className="para">
                Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                aenean nam laoreet nulla.
              </p>
            </div>
          </div>
        </TinySlider>
      </div>
    </div>
  );
};

export default Testimonial;
