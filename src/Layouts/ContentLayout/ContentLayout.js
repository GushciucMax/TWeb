import React from 'react'
import { Layout } from 'antd';
import { } from '../../styles/styles.css'

import { contentMock } from '../../Mock/content';
import { ContentCard } from '../../Components/ContentCard/ContentCard';


const { Content } = Layout

export const ContentLayout = () => {
    return (
		<Content className="contentLayout">
			{
				contentMock.map(({img, title, description}) => {
					return(
						<ContentCard title={title} description={description} img={img} />
					)
				})
			}
		</Content>
	)
}
