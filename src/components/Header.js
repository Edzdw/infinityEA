import React from "react";
import Signin from "./Signin";
import LinkRef from "./LinkRef";
import Exness from "./Exness";
import Axios from "axios";
import { normalAlert } from "./Swal";

const Header = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = React.useState(false);
  const [isLinkRefModalOpen, setIsLinkRefModalOpen] = React.useState(false);
  const [isAddExnessModalOpen, setIsAddExnessModalOpen] = React.useState(false);
  const [refferalCode, setRefferalCode] = React.useState(0);

  const [email, setEmail] = React.useState("");

  const toggleSignInModal = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  const toggleLinkRefModal = () => {
    setIsLinkRefModalOpen(!isLinkRefModalOpen);
  };

  const toggleAddExnessModal = () => {
    setIsAddExnessModalOpen(!isAddExnessModalOpen);
  };

  React.useEffect(() => {
    if (!localStorage.getItem("email")) {
      return;
    }
    setEmail(localStorage.getItem("email"));
  }, []);

  React.useEffect(() => {
    if (!email) {
      return;
    }
    let data = JSON.stringify({
      "email": email
    });

    let config = {
      method: 'post',
      url: 'https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/get-info',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    Axios.request(config)
      .then((response) => {
        if (response.data.isRefferal == 1) {
          toggleLinkRefModal();
        }
        setRefferalCode(response.data.refCode);
      }).catch(error => {
        if (error.response.status === 404) {
          normalAlert("Email: " + email + " không tồn tại!", "error");
        } else {
          console.log("error", error);
          normalAlert("Có lỗi xảy ra, vui lòng thử lại sau!", "error");
          localStorage.clear();
        }
      });
  }, [email]);

  const handleLogout = () => {
    localStorage.clear();
    normalAlert("Đã đăng xuất!", "success");
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  const handleCopy = () => {
    if (refferalCode) {
      navigator.clipboard.writeText(refferalCode)
        .then(function () {
          normalAlert("Mã giới thiệu đã được copy!", "success");
        });
    } else {
      return;
    }
  };

  return (
    <header>
      {/* Desktop Menu Starts */}
      <div className="header-inner hide-mobile">
        {/* MENU STARTS */}
        <div className="menu">
          <nav>
            <ul>
              <li>
                <span className="active" id="home-link">
                  Home
                </span>
              </li>
              <li>
                <span id="about-link">About</span>
              </li>
              <li>
                <span id="portfolio-link">Portfolio</span>
              </li>
              <li>
                <span id="contact-link">Contact</span>
              </li>
              <li>
                <span id="blog-link">Blog</span>
              </li>
              <li>
                {email ? <span id="network-link">Network</span> : ""}
              </li>
              <li>
                {email ? <span id="exness-link" onClick={toggleAddExnessModal}>Add Exness</span> : ""}
              </li>
            </ul>
          </nav>
        </div>
        {/* MENU ENDS */}
        {/* FREELANCE STARTS */}
        <div className="mail">
          {email ? <p>
            Ref Code :<span onClick={handleCopy}> {refferalCode} </span>
          </p> : ""}
          {email ? <span id="log-out" onClick={handleLogout}>
            Logout
          </span> : <span id="sign-in" onClick={toggleSignInModal}>Sign In</span>}
        </div>
        {/* FREELANCE ENDS */}
      </div>
      {/* Desktop Menu Ends */}
      {/* Mobile Menu Starts */}
      <nav className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" id="checkboxmenu" />
          <span />
          <span />
          <span />
          <ul className="list-unstyled" id="menu">
            <li>
              <a href="#home">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#my-photo">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>Contact</span>
              </a>
            </li>
            <li>
              <a href="#blog">
                <span>Blog</span>
              </a>
            </li>
            <li>
              {email ? <a href="#network">
                <span>Network</span>
              </a> : <a href="#network">
                <span id="sign-in" onClick={toggleSignInModal}>Sign In</span>
              </a>}
            </li>
            <li>
              {email ? <a href="#exness">
                <span onClick={toggleAddExnessModal}>Exness</span>
              </a> : ""}
            </li>
            <li>
              {email ? <p>
                Ref Code :<span onClick={handleCopy}> {refferalCode} </span>
              </p> : ""}

            </li>
            <li>
              {email ? <a href="#"><span onClick={handleLogout}>Logout</span></a> : ""}
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu Ends */}
      {isSignInModalOpen && <Signin isOpen={isSignInModalOpen} toggle={toggleSignInModal} />}

      <LinkRef isOpen={isLinkRefModalOpen} toggle={toggleLinkRefModal} current={email} />

      {isAddExnessModalOpen && <Exness isOpen={isAddExnessModalOpen} toggle={toggleAddExnessModal} success={toggleAddExnessModal} />}
    </header>
  );
};
export default Header;
