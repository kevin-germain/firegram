import React from 'react';

const Modal = ({ selectedImg, setSelectedImg }) => {

  const handleClick = (evt) => {
    if (evt.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return (
    <div className="backdrop" 
      onClick={handleClick}
    >
      <img src={selectedImg} alt="enlarged pic" className="backdrop-img" />
    </div>
  );
};

export default Modal;
