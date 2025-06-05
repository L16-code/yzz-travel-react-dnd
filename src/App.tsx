import React from "react";
import Itinerary from "./components/Itinerary";
import "./App.css";

function App() {
  return (
    <div className="container-fluid p-0">
      <div className="row min-vh-100 g-0">
        {/* Right section with itinerary */}
        <div className="col-md-6 bg-white overflow-auto min-vh-100 p-0">
          <Itinerary />
        </div>
        {/* Left section with map */}
        <div className="col-md-6 bg-light d-flex align-items-center justify-content-center min-vh-100">
          {/* <div className="text-center"> */}
          <iframe title="Google Maps showing Paris" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.591350780478!2d75.80107711209295!3d26.85294697658548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db50028dfc3eb%3A0x7dd3a0bd7cacb03e!2sWTP%20park%20%2Cshobhit%20park%20malviya%20nagar%20jaipur!5e0!3m2!1sen!2sin!4v1749101011175!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
