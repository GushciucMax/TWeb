import React from 'react'
import { Layout } from 'antd';
import { } from '../../styles/styles.css'

import { ContentCard } from '../../Components/ContentCard/ContentCard';

const { Content } = Layout

export const ContentLayout = ({ initialState, setInitialState }) => {

	// const [content, setContent] = useState([])
	//
	// useEffect(() => {
	// 	setContent(getStateByKey('initialState'))
	// })

    return (
		<Content className="contentLayout">
			{	!initialState.length ? (
				<div>No content</div>
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
