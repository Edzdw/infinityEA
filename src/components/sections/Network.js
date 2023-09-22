import React from "react";
import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import CurrentNetwork from "./CurrentNetwork";
import Axios from "axios";
import { normalAlert } from "../Swal";

const About = () => {
  const [networks, setNetworks] = React.useState([]);

  React.useEffect(() => {
    if (localStorage.getItem("email")) {
      let config = {
        method: 'get',
        url: `https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/getNetwork/${encodeURI(localStorage.getItem("email"))}`
      };

      Axios.request(config)
        .then((response) => {
          setNetworks(response.data);
        })
        .catch((error) => {
          normalAlert("Có lỗi xảy ra, vui lòng thử lại sau!", "error");
          console.log(error);
          // localStorage.clear();
        });
    } else {
      return;
    }
  }, []);

  return (
    <section
      className="portfolio network main-section flex-column-mobile"
      id="network"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Our Network
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <CurrentNetwork networks={networks} />
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;
