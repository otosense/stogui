import React, { lazy, useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import { StreamlitProvider } from "streamlit-component-lib-react-hooks"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Streamlit } from "streamlit-component-lib"

const DnDFlow = lazy(() => import('@otosense/ogui/src/DAGv2/App'));
const queryClient = new QueryClient();

import './index.css'

const StDnDFlow = () => {
  useEffect(() => Streamlit.setFrameHeight());

  return (<DnDFlow />)
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StreamlitProvider>
      <StDnDFlow />
    </StreamlitProvider>
  </QueryClientProvider>
)
