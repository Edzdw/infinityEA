import React from "react";
import Axios from "axios";
import { normalAlert } from "../Swal";

const About = () => {
  const email = localStorage.getItem("email");
  const [networks, setNetworks] = React.useState([]);
  const [currentRoot, setCurrentRoot] = React.useState("");
  const [prevRoot, setPrevRoot] = React.useState([]);



  React.useEffect(() => {
    if (!email) {
      normalAlert("Có lỗi xảy ra, vui lòng thử lại sau!", "error");
      localStorage.clear();
      setTimeout(() => {
        window.location.reload();
      }, 1500);
      return;
    }

    fetchNetwork(email);
    setCurrentRoot(email);
    setPrevRoot("");
  }, []);

  const fetchNetwork = (input) => {
    let config = {
      method: 'get',
      url: `https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/getNetwork/${encodeURI(input)}`
    };

    Axios.request(config)
      .then((response) => {
        setNetworks(response.data);
      })
      .catch((error) => {
        normalAlert("Có lỗi xảy ra, vui lòng thử lại sau!", "error");
        localStorage.clear();
        setTimeout(() => {
          window.location.reload();
        }, 1500);
        return;
      });
  }

  const handleGoBack = () => {
    const cur = prevRoot.pop();
    fetchNetwork(cur);
    setCurrentRoot(cur);
  };

  const handleShowNext = (current, prev) => {
    fetchNetwork(current);
    setCurrentRoot(current);
    setPrevRoot([...prevRoot, prev]);
  }

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

        <div className="network-main-content">
          <h3 className = "network-title"> Danh sách Partner </h3>
          {currentRoot !== email ? <button id= "hide" onClick={handleGoBack}>-</button> : ""}
          <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
            {networks.length === 0 ? (
              <span>Không có F1</span>
            ) : (
              networks.map((item, index) => (
                
                <li class ="ref-items" key={index} onClick={() => { handleShowNext(item.email, item.referrer) }}>
                  <button id = "show" onClick={() => { handleShowNext(item.email, item.referrer) }}> + </button> 
                  {item.email}                  
                </li>
              ))
            )}
          </ul>
        </div>


      </section>
    );
  };
  export default About;
