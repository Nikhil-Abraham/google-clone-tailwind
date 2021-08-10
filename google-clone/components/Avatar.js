import React from "react";

function Avatar({ url }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      loading="lazy"
      src={url}
      className="rounded-full h-10 cursor-pointer 
      transition duration-150 transform hover:scale-110"
      alt="profile pic"
    />
  );
}

export default Avatar;
