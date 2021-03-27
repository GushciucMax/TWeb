import React from 'react'
import { Layout } from 'antd';
import { } from '../../styles/styles.css'
import { NoContent } from '../../Components/NoContent/NoContent'

import { ContentCard } from '../../Components/ContentCard/ContentCard';

const { Content } = Layout

export const ContentLayout = ({ initialState, setInitialState }) => {

	return (
		<Content className="contentLayout">
			{	!initialState.length ? (
				<NoContent />
			) : (
				initialState.map(({img, title, description}, index) => {
					return(
						<ContentCard initialState={ initialState } setInitialState={setInitialState} key={index} title={title} description={description} img={img} index={index} />
					)
				})
			)}
		</Content>
	)
}
