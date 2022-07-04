import React from "react";
import "./BODY.css";
import Nav from "../nav/Nav";
import File from "../file/File";
const BODY = () => {
  return (
    <div className="body">
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="explane">
            {" "}
            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">payment Method</th>
                  <th scope="col">payment Amount</th>
                  <th scope="col">payment Date</th>
                </tr>
              </thead>
              <tbody>
                <File id="1" name="paypal" price="1000" date="1/1/2022" />
                <File id="2" name="Debit card" price="200" date="1/1/2022" />
                <File id="3" name="paypal" price="50" date="1/1/2022" />
                <File id="4" name="Amazon pay" price="500" date="1/1/2022" />
                <File id="5" name="Debit card" price="40" date="1/1/2022" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BODY;
