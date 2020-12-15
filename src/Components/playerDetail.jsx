import React from "react";

const playerDetail = (props) => {
  return (
    <div className="c-player--details">
      <div className="detail-image">
        <img src={props.song.img_src} alt=""></img>
      </div>
      <h3 className="detail-title">{props.song.title}</h3>
      <h4 className="detail-artist">{props.song.artist}</h4>
    </div>
  );
};

export default playerDetail;
