import React, { useRef } from "react";

import ModalHeader from "./modalheader";

import "../styles/base.css";

export default function Modal({ title, component, subtitle }) {
  const modalRef = useRef(null);

  const handleDrag = (movementX, movementY) => {
    const modal = modalRef.current;
    if (!modal) return;

    const { x, y } = modal.getBoundingClientRect();
    let widthMultiplier = window.screen.width/900;
    let heightMultiplier = window.screen.height/500;

    console.log(window.screen.width);

    modal.style.left = `${x + movementX*heightMultiplier}px`;
    modal.style.top = `${y + movementY*widthMultiplier}px`;

  };

  return (
    <div className="modal" ref={modalRef}>
      <ModalHeader onDrag={handleDrag} title={title} subtitle={subtitle} />
      <div>{component}</div>
    </div>
  );
}
