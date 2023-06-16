import React from "react"
import ReactDOM from "react-dom"
import { StreamlitProvider } from "streamlit-component-lib-react-hooks"
import StDragAndDropFlow from "./StDragAndDropFlow"

ReactDOM.render(
  <React.StrictMode>
    <StreamlitProvider>
      <StDragAndDropFlow />
    </StreamlitProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
