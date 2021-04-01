import React, { useEffect } from 'react'
import { Layout } from 'antd';
import { } from '../../styles/styles.css'
import { observer } from "mobx-react-lite"
import { NoContent } from '../../Components/NoContent/NoContent'

import { ContentCard } from '../../Components/ContentCard/ContentCard';
import { useRootStore } from "../../mobx/ProviderRootStore/ProviderRootStore"

const { Content } = Layout

export const ContentLayout = observer(() => {

	const { setInitialState, content$, contentSum } = useRootStore()

	useEffect(() => {
		setInitialState()
	}, [])

	return (
		<Content className="contentLayout">
			{contentSum}

			{	!content$.length ? (
				<NoContent />
			) : (
				content$.map(({img, title, description, id, removeCard}) => {
					return(
						<ContentCard 
							key={id} 
							title={title} 
							description={description} 
							img={img} 
							id={id} 
							removeCard = {removeCard}/>
					)
				})
			)}
		</Content>
	)
})
