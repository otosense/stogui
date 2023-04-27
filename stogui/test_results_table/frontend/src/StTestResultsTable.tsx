import React, { useEffect }  from 'react';
import { Streamlit } from "streamlit-component-lib"
import { useRenderData } from 'streamlit-component-lib-react-hooks'
import { TestResult } from '@otosense/ogui/lib/SessionTable/types';
import { TestResultsTable } from '@otosense/ogui/lib/SessionTable/TestResultsTable';



const StTestResultsTable = () => {
  const renderData = useRenderData()
  const sessions: TestResult[] = renderData.args['sessions'] || []
  const query = renderData.args['query'] || null
  const isMultiSelect = renderData.args['is_multiselect'] || false
  useEffect(() => Streamlit.setFrameHeight(1024));

  return(
    <TestResultsTable
      data={sessions}
      onSelectSessions={(sessions: any[]) => {
        console.log('TestResultsTable onSelectSessions', sessions)
        Streamlit.setComponentValue(sessions)
      }}
      query={query}
      isMultiSelect={isMultiSelect}
    />
  )
}

export default StTestResultsTable;
