import React, { useEffect }  from 'react';
import { Streamlit } from "streamlit-component-lib"
import { useRenderData } from 'streamlit-component-lib-react-hooks'
import { Session } from '@otosense/ogui/lib/SessionTable/types';
import { OtoTable } from './OtoTable';



const StOtoTable = () => {
  const renderData = useRenderData()
  const sessions: Session[] = renderData.args['sessions'] || []
  const query = renderData.args['query'] || null
  const isMultiSelect = renderData.args['is_multiselect'] || false
  useEffect(() => Streamlit.setFrameHeight(1024));

  return(
    <OtoTable
      data={sessions}
      onSelectSessions={(v: string[]) => {
        console.log('OtoTable onSelectSessions', v)
        Streamlit.setComponentValue(v)
      }}
      query={query}
      isMultiSelect={isMultiSelect}
    />
  )
}

export default StOtoTable;
