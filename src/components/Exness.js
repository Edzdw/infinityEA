import React from "react";
import Axios from "axios";
import RemoveExness from "./RemoveExness";

import { normalAlert } from "./Swal";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function Exness({ isOpen, toggle, success }) {
  const [exnessId, setExnessId] = React.useState("");
  const [exnessRemove, setExnessRemove] = React.useState("");
  const email = localStorage.getItem("email");
  const [isRemoveExnessModalOpen, setIsRemoveExnessModalOpen] = React.useState(false);

  const [listExness, setListExness] = React.useState([]);

  const toggleRemoveExnessModal = (e) => {
    setExnessRemove(e);
    setIsRemoveExnessModalOpen(!isRemoveExnessModalOpen);
  }

  React.useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/get-exness/${encodeURI(email)}`,
      headers: {}
    };

    Axios.request(config)
      .then((response) => {
        setListExness(response.data);
      })
      .catch(() => {
        normalAlert("Có lỗi xảy ra, vui lòng thử lại sau!", "error");
        localStorage.clear();
        setTimeout(() => {
          window.location.reload();
        }, 1500);
        return;
      });

  }, [email]);

  const handleSubmit = () => {
    if (exnessId === "") {
      normalAlert("Vui lòng nhập id và mật khẩu để đăng nhập!", "error");
      return;
    }

    if (!email) {
      normalAlert("Vui lòng đăng nhập để thực hiện thao tác này!", "error");
      return;
    }

    const axios = require('axios');
    let data = JSON.stringify({
      "email": email,
      "exness": exnessId,
      "type": 1 // type == 1 => Them
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/update-exness`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    Axios.request(config)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          normalAlert("Thêm Exness ID thành công!", "success");
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else if (response.status === 226) {
          normalAlert("Exness ID này đã được thêm vào hệ thống!", "error");
        }
      })
      .catch(() => {
        normalAlert("Có lỗi xảy ra, vui lòng thử lại sau!", "error");
        localStorage.clear();
        setTimeout(() => {
          window.location.reload();
        }, 1500);
        return;
      });
  }

  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className=" modal-header">
          <h5 className=" modal-main-title " id="exampleModalLabel">
            Thêm tài khoản Exness
          </h5>
        </div>
        <ModalBody style={{ color: "black", display: "flex", flexDirection: "column", gap: "10px" }}>

          <div className="form-group">
            <span> Exness ID </span>

            <input className="form-field" type="text" id="exness-id" placeholder="Nhập tài khoản exness..." value={exnessId} style={{ width: "100%" }}
              onChange={(e) => {
                setExnessId(e.target.value);
              }}
            />
          </div>

          <Button color="primary" type="button" onClick={handleSubmit}>
            <span> Submit </span>
          </Button>
        </ModalBody>
        <ModalFooter style={{ color: "black", display: "flex", flexDirection: "column", gap: "10px" }}>
          <div className=" modal-header">
            <h5 className=" modal-main-title " id="exampleModalLabel">
              Danh sách tài khoản Exness
            </h5>
          </div>

          {listExness.map((item) => {
            return (<div className="form-group" key={item} >
              <span> Exness ID </span>
              <input className="form-field" type="text" value={item} style={{ width: "100%" }} readOnly={true} />
              <span style={{ color: "red", cursor: "pointer" }} onClick={() => { toggleRemoveExnessModal(item) }}> X </span>
            </div>)
          })}

          <RemoveExness isOpen={isRemoveExnessModalOpen} id={exnessRemove} toggle={toggleRemoveExnessModal} />

        </ModalFooter>
      </Modal>
    </>
  );
}

export default Exness;