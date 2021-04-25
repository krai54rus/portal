import React, { useState, useEffect } from 'react';
function Modal(){
  return (
    <div className="modal-wrapper">
      <div className="modal-overlay"></div>
      <div className="modal-content">
        <form className="modal-content__card">
          <div className="modal-content__card_img">
            <input type="file" name="img"/>
          </div>

          <div className="modal-content__card_name">
            <input type="text" name="name"/>
          </div>
          <div className="modal-content__card_brewry">
            <input type="text" name="brewry"/>
          </div>

          <div className="modal-content__card_chars">
            <input type="text" name="abv"/>
            <input type="text" name="og"/>
            <input type="text" name="ibu"/>
          </div>
          <div className="modal-content__card_sort">
            <input type="text" name="sort"/>
          </div>

          <div className="modal-content__card_class">
            <input type="text" name="class"/>
          </div>
          <div className="modal-content__card_style">
            <input type="text" name="style"/>
          </div>
          <div className="modal-content__card_country">
            <input type="text" name="country"/>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Modal;
