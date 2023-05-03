import React, { useEffect }  from 'react';
import { Streamlit } from "streamlit-component-lib"
import { useRenderData } from 'streamlit-component-lib-react-hooks'
import { DppMetadata } from '@otosense/ogui/lib/SessionTable/types';
import { DppTable } from '@otosense/ogui/lib/SessionTable/DppTable';

const StDppTable = () => {
  const renderData = useRenderData()
  const dpp_metadata: DppMetadata[] = renderData.args['data'] || []
  const query = renderData.args['query'] || null
  const isMultiSelect = renderData.args['is_multiselect'] || false
  useEffect(() => Streamlit.setFrameHeight(1024));

  return(
    <DppTable
      data={dpp_metadata}
      onSelectDpp={(data: DppMetadata[]) => Streamlit.setComponentValue(data)}
      query={query}
      isMultiSelect={isMultiSelect}
    />
  )
}

export default StDppTable;
