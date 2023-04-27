import React from "react"
import ReactDOM from "react-dom"
import { StreamlitProvider } from "streamlit-component-lib-react-hooks"
import StTestResultsTable from "./StTestResultsTable"

ReactDOM.render(
  <React.StrictMode>
    <StreamlitProvider>
      <StTestResultsTable />
    </StreamlitProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
