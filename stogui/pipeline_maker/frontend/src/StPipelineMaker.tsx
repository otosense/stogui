import React, { useEffect } from 'react';
import { Streamlit } from "streamlit-component-lib"
import { useRenderData } from 'streamlit-component-lib-react-hooks'
import { PipelineMaker } from '@otosense/ogui';

const StPipelineMaker = () => {
  const renderData = useRenderData()
  const items = renderData.args['items'] || []
  const steps = renderData.args['steps'] || []

  useEffect(() => Streamlit.setFrameHeight());

  const resizeFrame = () => {
    setTimeout(() => {
      Streamlit.setFrameHeight()
    }, 0);
  }

  return(
    <PipelineMaker
      items={items}
      steps={steps}
      style={{filter: 'invert(1)', minHeight: "300px"}}
      onAddStep={resizeFrame}
      onDeleteStep={resizeFrame}
      onShowItems={resizeFrame}
      onHideItems={resizeFrame}
      onPipelineChange={Streamlit.setComponentValue}
    />
  )
}

export default StPipelineMaker;