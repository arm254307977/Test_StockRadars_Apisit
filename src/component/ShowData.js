import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Body = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://stockradars.co/assignment/data.php"
      );
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((items, index) => {
          return (
            <div className="col">
              <div className="card h-100">
                <p className="card-text card-header">{items.N_fullname}</p>
                <div className="p-4">
                  <p className="card-text">
                    <strong>Name : </strong> {items.N_name}
                  </p>
                  <p className="card-text">
                    <strong>Shortname : </strong> {items.N_shortname}
                  </p>
                  <p className="card-text">
                    <strong>Marketcap : </strong> {items.marketcap}
                  </p>
                  <p className="card-text">
                    <strong>บริษัท : </strong> {items.N_COMPANY_T}
                  </p>
                  <p className="card-text">
                    <strong>Company : </strong> {items.N_COMPANY_E}
                  </p>
                  <p className="card-text">
                    <strong>URL : </strong> {items.N_URL}
                  </p>
                  <p className="card-text">
                    <strong>Type : </strong> {items.F_TYPE}
                  </p>
                  <p className="card-text">
                    <strong>ธุรกิจ : </strong> {items.N_BUSINESS_TYPE_T}
                  </p>{" "}
                  <p className="card-text">
                    <strong>business : </strong> {items.N_BUSINESS_TYPE_E}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
