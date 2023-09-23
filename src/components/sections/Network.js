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

      {/* PORTFOLIO ITEM STARTS */}
      <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <ul> <h3 className = 'network-title'>Danh sách F1</h3>
              {Array.isArray(networks.F1) && networks.F1.length > 0 ? (
                <>
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    {visibleItemsF1.map((item, id) => (
                      <li key={id} style={{ paddingLeft: "20px" }}>{startIndex1 + id + 1} - {item}</li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                    {startIndex1 > 0 && (
                      <li
                        style={{ paddingLeft: "20px", color: "blue", cursor: "pointer" }}
                        onClick={handlePrevF1}
                      >
                        Previous
                      </li>
                    )}
                    {startIndex1 + itemsPerPage < networks.F1.length && (
                      <li
                        style={{ paddingLeft: "20px", color: "blue", cursor: "pointer" }}
                        onClick={handleNextF1}
                      >
                        Next
                      </li>
                    )}
                  </div>
                </>
              ) : (
                <li>Không có dữ liệu F1</li>
              )}
            </ul>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}

      <div className="main-content">
        <h3 className = "main-content-title"> Danh sách Partner </h3>
        {currentRoot !== email ? <button onClick={handleGoBack}>Quay lại</button> : ""}
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          {networks.length === 0 ? (
            <span>Không có F1</span>
          ) : (
            networks.map((item, index) => (
              <li class ="network-items" key={index} onClick={() => { handleShowNext(item.email, item.referrer) }}>
                {item.email}
                <button id = "show" onClick = "show()"> + </button> 
              </li>
            ))
          )}
        </ul>
      </div>

      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;
