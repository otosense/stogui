import React from "react"
import ReactDOM from "react-dom"
import { StreamlitProvider } from "streamlit-component-lib-react-hooks"
import StOtoTable from "./StSessionTable"

ReactDOM.render(
  <React.StrictMode>
    <StreamlitProvider>
      <StOtoTable />
    </StreamlitProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
