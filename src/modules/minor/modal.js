import React, { useRef, useState, useEffect} from "react";

import ModalHeader from "./modalheader";

import "../styles/base.css";


export default function Modal({ title, component, subtitle }) {
  const modalRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ mouseX: null, mouseY: null });
  
    const updateMousePosition = ev => {
      setMousePosition({ mouseX: ev.clientX, mouseY: ev.clientY });
    };

    useEffect(() => {
      window.addEventListener("mousemove", updateMousePosition);

      return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

  const handleDrag = (movementX, movementY) => {
    const modal = modalRef.current;
    if (!modal) return;

    const { x, y } = modal.getBoundingClientRect();

    let widthMultiplier = modalRef.current.clientWidth/2;
    let heightMultiplier = modalRef.current.clientHeight/13;

    console.log(modal);
    modal.style.left = `${mousePosition.mouseX - widthMultiplier}px`;
    modal.style.top = `${mousePosition.mouseY - heightMultiplier}px`;

  };

  return (
    <div className="modal" ref={modalRef}>
      <ModalHeader onDrag={handleDrag} title={title} subtitle={subtitle} />
      <div>{component}</div>
    </div>
  );
}
