import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({ value, type, size, style }) => (
  <button className={`${size} ${style}`}>
    {value}
  </button>

)

export default CustomButton;