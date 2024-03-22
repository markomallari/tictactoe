import React from "react";

const BoxItem = ({ player }) => {
  return <>{player ? player : <br />}</>;
};

export default BoxItem;
