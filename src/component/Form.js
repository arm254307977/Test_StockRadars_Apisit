import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "mdb-ui-kit"; // lib
import "mdb-ui-kit"; // module
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Form.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [ref, setRef] = useState("");
  const location = useLocation();
  const [msgFName, setMsgFName] = useState("ㅤ");
  const [msgLName, setMsgLName] = useState("ㅤ");
  const [msgPhone, setMsgPhone] = useState("ㅤ");
  const [msgEmail, setMsgEmail] = useState("ㅤ");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setRef(searchParams.get("ref"));
    setEmail(searchParams.get("email"));
  }, [location.search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (!firstName) {
      setMsgFName("Please enter your first name");
      isValid = false;
    } else if (specialCharsRegex.test(firstName)) {
      setMsgFName("Please enter a valid first name without special characters");
      isValid = false;
    } else {
      setMsgFName("ㅤ");
    }
    if (!lastName) {
      setMsgLName("Please enter your last name");
      isValid = false;
    } else if (specialCharsRegex.test(lastName)) {
      setMsgLName("Please enter a valid last name without special characters");
      isValid = false;
    } else {
      setMsgLName("ㅤ");
    }
    if (!phoneNumber) {
      setMsgPhone("Please enter your phone number");
      isValid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      setMsgPhone("Please enter a valid 10-digit phone number");
      isValid = false;
    } else {
      setMsgPhone("ㅤ");
    }
    if (!email) {
      setMsgEmail("Please enter your email");
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMsgEmail("Please enter a valid email");
      isValid = false;
    } else {
      setMsgEmail("ㅤ");
    }

    if (isValid) {
      // ทำตามขั้นตอนต่อไปเมื่อข้อมูลถูกต้อง
      // เช่น ส่งข้อมูลไปยังเซิร์ฟเวอร์หรือประมวลผลข้อมูล
      console.log("Form submitted");
    }
  };

  return (
    <div className="container min-vh-100 w-50">
    <h1 className="text-center">Registration Form</h1>
    <form className="row g-3 mt-5">
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="form-control"
            required
          />
          {msgFName && (
            <span style={{ color: "red", fontSize: 12 }}>{msgFName}</span>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="form-control"
            required
          />
          {msgLName && (
            <span style={{ color: "red", fontSize: 12 }}>{msgLName}</span>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number:
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            className="form-control"
            required
          />
          {msgPhone && (
            <span style={{ color: "red", fontSize: 12 }}>{msgPhone}</span>
          )}
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            readOnly
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="form-control"
            required
          />
          {msgEmail && (
            <span style={{ color: "red", fontSize: 12 }}>{msgEmail}</span>
          )}
        </div>
        <div className="col-md-12">
          <label htmlFor="ref" className="form-label">
            Ref:
          </label>
          <input
            readOnly
            type="text"
            id="ref"
            value={ref}
            onChange={(event) => setRef(event.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-12 mt-5">
          <button className="button-save" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
