import React from "react";
import Axios from "axios";
import { normalAlert } from "./Swal";

// reactstrap components
import { Button, Modal, ModalBody } from "reactstrap";

function ForgotPass({ isOpen, toggle, success }) {
    const [email, setEmail] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [code, setCode] = React.useState("");

    const handleGetCode = () => {
        if (email === "") {
            normalAlert("Vui lòng nhập email để nhận mã xác thực!", "error");
            return;
        } else if (!isValidEmail(email)) {
            normalAlert("Email không hợp lệ, vui lòng thử lại!", "error");
            return;
        }
        let data = JSON.stringify({
            "email": email
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/getCode',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        Axios.request(config)
            .then((response) => response.data)
            .then(result => {
                if (result === "Email không tồn tại!") {
                    normalAlert("Email không tồn tại, xin vui lòng thử lại!", "error");
                } else if (result === "OK") {
                    normalAlert("Mã xác thực đã được gửi về email, vui lòng kiểm tra email", "success");
                }
            })
            .catch((error) => {
                normalAlert("Có lỗi xảy ra, vui lòng thử lại sau!", "error");
                console.log(">>> Error ", error);
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
                return;
            });
    }

    const handleRecovery = () => {
        if (email === "" || newPassword === "" || confirmPassword === "" || code === "") {
            normalAlert("Vui lòng nhập thông tin để đặt lại mật khẩu!", "error");
            return;
        } else if (!isValidEmail(email)) {
            normalAlert("Email không hợp lệ, vui lòng thử lại!", "error");
            return;
        }
        let data = JSON.stringify({
            "email": email,
            "newPassword": newPassword,
            "code": code
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://jellyfish-app-kafzn.ondigitalocean.app/api/v1/auth/forgot-password',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        Axios.request(config)
            .then((response) => response.data)
            .then(result => {
                if (result === "Mã xác thực không chính xác!") {
                    normalAlert("Mã xác thực không chính xác, xin vui lòng thử lại!", "error");
                } else if (result === "OK") {
                    normalAlert("Khôi phục mật khẩu thành công!", "success");
                    success();
                }
            })
            .catch((error) => {
                if (error.response.status === 404) {
                    normalAlert("Email không tồn tại, xin vui lòng thử lại!", "error");
                } else {
                    normalAlert("Có lỗi xảy ra, vui lòng thử lại sau!", "error");
                }
            });
    }

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    return (
        <>
            <Modal isOpen={isOpen} toggle={toggle}>
                <div className=" modal-header">
                    <h5 className=" modal-main-title " id="exampleModalLabel">
                        Khôi phục mật khẩu
                    </h5>
                </div>
                <ModalBody style={{ color: "black", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div className="form-group">
                        <span style={{ width: "210" }}> Email </span>
                        <input className="form-field" type="email" id="email" placeholder="Nhập email..." value={email} style={{ width: "100%" }}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <Button id = "confirm-btn" onClick={handleGetCode} value="Get Code"> Confirm </Button>
                    </div>

                    <div className="form-group">
                        <span style={{ width: "160px" }}> Mật khẩu mới </span>
                        <input className="form-field" type="password" placeholder="Nhập mật khẩu mới..." value={newPassword} style={{ width: "100%" }}
                            onChange={(e) => {
                                setNewPassword(e.target.value);
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <span style={{ width: "160px" }}> Xác nhận </span>
                        <input className="form-field" type="password" placeholder="Nhập xác nhận mật khẩu mới..." value={confirmPassword} style={{ width: "100%" }}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <span style={{ width: "160px" }}> Mã xác thực </span>
                        <input className="form-field" type="text" placeholder="Nhập mã xác thực từ email..." value={code} style={{ width: "100%" }}
                            onChange={(e) => {
                                setCode(e.target.value);
                            }}
                        />
                    </div>

                    <Button color="primary" type="button" onClick={handleRecovery}>
                        <span> Khôi phục </span>
                    </Button>
                </ModalBody>
            </Modal>
        </>
    );
}

export default ForgotPass;