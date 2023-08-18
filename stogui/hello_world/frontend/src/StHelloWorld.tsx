import React, { useEffect } from 'react';
import { Streamlit } from "streamlit-component-lib"

const StHelloWorld = () => {
  useEffect(() => Streamlit.setFrameHeight());

  return (<div>Hello World!!</div>)
}

export default StHelloWorld;
