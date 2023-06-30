import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-ui-kit"; // lib
import "mdb-ui-kit"; // module

function Footer() {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start mt-4">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright :
          <a
            className="text-dark"
            href="https://web.facebook.com/profile.php?id=100078836844899"
          >
            {" "}
            Facebook Apisit
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
