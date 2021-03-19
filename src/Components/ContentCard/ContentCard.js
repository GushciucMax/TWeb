import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

export const ContentCard = ({img, title, description}) => {
	return (
		<Card
		    hoverable
		    style={{ width: 240, margin: 10 }}
		    cover={<img alt="example" src={img} />}
		  >
		    <Meta title={title} description={description} />
		</Card>
	)
}
