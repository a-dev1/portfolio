import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({ value, type, size, style }) => (
  <button className={`${size} ${style}`} type={type}>
    {value}
  </button>

)

export default CustomButton;