import React, { useEffect }  from 'react';
import { Streamlit } from "streamlit-component-lib"
import { useRenderData } from 'streamlit-component-lib-react-hooks'
import { Session } from '@otosense/ogui/lib/SessionTable/types';
import { SessionTable } from '@otosense/ogui/lib/SessionTable/SessionTable';



const StSessionTable = () => {
  const renderData = useRenderData()
  const sessions: Session[] = renderData.args['sessions'] || []
  const query = renderData.args['query'] || null
  const isMultiSelect = renderData.args['is_multiselect'] || false
  useEffect(() => Streamlit.setFrameHeight(1024));

  return(
    <SessionTable
      data={sessions}
      onSelectSessions={(sessions: any[]) => {
        console.log('SessionTable onSelectSessions', sessions)
        Streamlit.setComponentValue(sessions)
      }}
      query={query}
      isMultiSelect={isMultiSelect}
    />
  )
}

export default StSessionTable;
