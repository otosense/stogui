import React, { useEffect } from 'react';
import { Streamlit } from "streamlit-component-lib"
import { DnDFlow } from '@otosense/ogui/lib/DAG/Components/DragandDrop/Dagger';

const StDragAndDropFlow = () => {
  useEffect(() => Streamlit.setFrameHeight());

  return <DnDFlow/>
}

export default StDragAndDropFlow;
