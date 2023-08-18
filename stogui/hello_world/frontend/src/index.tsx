import React from "react"
import ReactDOM from "react-dom"
import { StreamlitProvider } from "streamlit-component-lib-react-hooks"
import StHelloWorld from "./StHelloWorld"

ReactDOM.render(
  <React.StrictMode>
    <StreamlitProvider>
      <StHelloWorld />
    </StreamlitProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
