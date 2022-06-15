import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="my location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.1155949103654!2d-122.72590198426826!3d38.34630648684263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808435f6aadd9699%3A0xc3b56c63f5fd8259!2sRohnert%20Park%2C%20CA%2094928!5e0!3m2!1sen!2sus!4v1655240075856!5m2!1sen!2sus"
        ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
