import React from 'react'
import { Card } from 'antd';
import { } from '../../styles/styles.css'

const { Meta } = Card;

export const ContentCard = ({ img, title, description, removeCard, id }) => {

	return (
		<Card className='card'
		    hoverable
		    cover={<img alt="example" src={img} />}
			onClick={() => {
				removeCard(id)
			} }
		  >
		    <Meta title={title} description={description} />
		</Card>
	)
}
