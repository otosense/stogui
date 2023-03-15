import React from 'react';
import { useRenderData } from 'streamlit-component-lib-react-hooks'
import { OtoTable } from '@otosense/ogui';


const returnEmptyList = () => []

const StSessionTable = () => {
  const renderData = useRenderData()
  const listSessions = renderData.args['listSessions'] || returnEmptyList

  return(
    <OtoTable
      listSessions={listSessions}
    />
  )
}

export default StSessionTable;
