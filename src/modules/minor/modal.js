import React, { useRef } from "react";

import ModalHeader from "./modalheader";

import "../styles/base.css";

var mouseX, mouseY;
$(document).mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
}).mouseover();

export default function Modal({ title, component, subtitle }) {
  const modalRef = useRef(null);

  const handleDrag = (movementX, movementY) => {
    const modal = modalRef.current;
    if (!modal) return;

    const { x, y } = modal.getBoundingClientRect();
    modal.style.left = `${mouseX - x}px`;
    modal.style.top = `${mouseY - y}px`;
  };

  return (
    <div className="modal" ref={modalRef}>
      <ModalHeader onDrag={handleDrag} title={title} subtitle={subtitle} />
      <div>{component}</div>
    </div>
  );
}
