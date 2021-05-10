import React, { useRef, useState, useEffect} from "react";

import ModalHeader from "./modalheader";

import "../styles/base.css";


export default function Modal({ title, component, subtitle, mouseX, mouseY}) {

  const modalRef = useRef(null);

  const handleDrag = (movementX, movementY) => {
    const modal = modalRef.current;
    if (!modal) return;

    let widthMultiplier = modalRef.current.clientWidth/2;
    let heightMultiplier = modalRef.current.clientHeight/13;

    console.log(modal);
    modal.style.left = `${mouseX - widthMultiplier}px`;
    modal.style.top = `${mouseY - heightMultiplier}px`;

  };

  return (
    <div className="modal" ref={modalRef}>
      <ModalHeader onDrag={handleDrag} title={title} subtitle={subtitle} />
      <div>{component}</div>
    </div>
  );
}
