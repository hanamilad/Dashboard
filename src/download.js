import React, { Component, useCallback } from "react";
import jsPDF from "jspdf";
import Home from "./component/home/home";

export default class Download extends Component {
  don = () => {
    //   var doc = new jsPDF("p", "pt", "a4");
    //   doc.addh(document.querySelector(".call"));
    //   doc.save("a4.pdf");
    // };
    var doc = new jsPDF("p", "pt", "a4","true");
    doc.html(document.body, {
      callback: function (doc) {
        
        
            doc.autoPrint({variant: 'non-conform'});
            
            doc.save();
      },
    });
  };
  print =()=>{
window.print();

  }

  render() {
    return (
      <div>
        <button className="btn btn-danger" onClick={this.print}>
          Download
        </button>
      </div>
    );
  }
}
