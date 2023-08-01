import React, { useEffect } from 'react';
import { Streamlit } from "streamlit-component-lib"
import { DnDFlow } from '@otosense/ogui/lib/DAGv2/Components/DragandDrop/Dagger';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// const queryClient = new QueryClient();
const StDragAndDropFlow = () => {
  useEffect(() => Streamlit.setFrameHeight());

  return (
    // <QueryClientProvider client={queryClient}>
    <DnDFlow />
    // </QueryClientProvider>
  )
}

export default StDragAndDropFlow;
