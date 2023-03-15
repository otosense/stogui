import React from "react"
import ReactDOM from "react-dom"
import { StreamlitProvider } from "streamlit-component-lib-react-hooks"
import StSessionTable from "./StSessionTable"

ReactDOM.render(
  <React.StrictMode>
    <StreamlitProvider>
      <StSessionTable />
    </StreamlitProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
