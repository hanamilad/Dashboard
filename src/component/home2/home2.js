import React from "react";
import data from "../../josn/custemer.json";
import "./home2.css";

const Home2 = () => {
  return (
    <div className="home2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 head">
            <div className="text">Recent Order</div>
            <button className="btn btn-danger">View All</button>
          </div>
          <div className="col-4 titel">Name</div>
          <div className="col-4 titel">Price</div>
          <div className="col-4 titel">payment</div>
          <div className="col-12">
            {data.map((data) => {
              return (
                <div className="col-12 total" key={data.id}>
                  <div className="col-4 part" style={{ color: "red" }}>
                    {data.name}
                  </div>
                  <div className="col-4 part" style={{ color: "green" }}>
                    ${data.price}
                  </div>
                  <div className="col-4 part" style={{ color: "blue" }}>
                    {data.payment}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
