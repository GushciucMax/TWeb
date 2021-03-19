import React from 'react'
import { Calendar } from 'antd';

export const Calendard = () => {

	function onPanelChange(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode);
}
    return (
		<Calendar style={{padding: '0 24px'}} onPanelChange={onPanelChange} />
    )
}
