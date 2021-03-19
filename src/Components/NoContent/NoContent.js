import React from 'react'
import { Empty } from 'antd';
import { } from '../../styles/styles.css'

export const NoContent = () => {
    return (
		<Empty className="noContent" image={Empty.PRESENTED_IMAGE_SIMPLE} />
    )
}
