import React, { useRef } from "react";

import ModalHeader from "./modalheader";

import "../styles/base.css";

export default function Modal({ title, component, subtitle }) {
  const modalRef = useRef(null);

  const handleDrag = (movementX, movementY) => {
    const modal = modalRef.current;
    if (!modal) return;

    const { x, y } = modal.getBoundingClientRect();
    let widthMultiplier = modalRef.current.clientWidth/1000;
    let heightMultiplier = modalRef.current.clientHeight/1000;

    console.log(`MovementX: ${movementX}`);
    console.log(`MovementY: ${movementY}`);

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
