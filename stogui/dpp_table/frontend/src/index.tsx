import React from "react"
import ReactDOM from "react-dom"
import { StreamlitProvider } from "streamlit-component-lib-react-hooks"
import StDppTable from "./StDppTable"

ReactDOM.render(
  <React.StrictMode>
    <StreamlitProvider>
      <StDppTable />
    </StreamlitProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
