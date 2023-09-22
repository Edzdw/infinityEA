import React from "react";
import Axios from "axios";
import { normalAlert } from "./Swal";

// reactstrap components
import { Button, Modal, ModalBody } from "reactstrap";

function RemoveExness({ isOpen, toggle, id }) {
  const email = localStorage.getItem("email");

  const handleRemove = () => {
    if (!email) {
      normalAlert("Vui lòng đăng nhập để thực hiện thao tác này!", "error");
      return;
    }
    let data = JSON.stringify({
      "email": email,
      "exness": id,
      "type": 2 // type === 2 => Xoa
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/v1/auth/update-exness',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    Axios.request(config)
      .then((response) => {
        if (response.data.message === "Exness ID xoá thành công  user: " + email) {
          normalAlert("Thêm Exness ID thành công!", "success");
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else if (response.data.message === "Exness ID này không tồn tại.") {
          normalAlert("Exness ID này đã được thêm vào hệ thống!", "error");
        }
        console.log(response.data);
      })
      .catch(() => {
        normalAlert("Lỗi không thể cập nhật Exness ID, vui lòng thử lại sau!", "error");
        return;
      });

    toggle();
  }
  return (
    <>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className=" modal-header">
          <h5 className=" modal-main-title " id="exampleModalLabel">
            Xoá tài khoản Exness ID: {id}
          </h5>
        </div>
        <ModalBody style={{ color: "black", display: "flex", flexDirection: "column", gap: "10px" }}>
          <Button color="primary" type="button" onClick={handleRemove}>
            <span> Xác nhận </span>
          </Button>
        </ModalBody>
      </Modal>
    </>
  );
}

export default RemoveExness;