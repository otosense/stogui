import React, { useEffect }  from 'react';
import { Streamlit } from "streamlit-component-lib"
import { useRenderData } from 'streamlit-component-lib-react-hooks'
import { OtoTable } from '@otosense/ogui';
import { Session } from '@otosense/ogui/lib/SessionTable/types';



const StOtoTable = () => {
  const renderData = useRenderData()
  const sessions: Session[] = renderData.args['sessions'] || []
  const query = renderData.args['query'] || null
  useEffect(() => Streamlit.setFrameHeight(1024));
  return(
    <OtoTable
      data={sessions}
      setComponentValue={Streamlit.setComponentValue}
      query={query}
    />
  )
}

export default StOtoTable;
