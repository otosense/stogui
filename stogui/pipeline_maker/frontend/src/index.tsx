import React from "react"
import ReactDOM from "react-dom"
import { StreamlitProvider } from "streamlit-component-lib-react-hooks"
import StPipelineMaker from "./StPipelineMaker"

ReactDOM.render(
  <React.StrictMode>
    <StreamlitProvider>
      <StPipelineMaker />
    </StreamlitProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
