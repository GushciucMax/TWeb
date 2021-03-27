import React from 'react'
import { Layout } from 'antd';
import { } from '../../styles/styles.css'
import { observer } from "mobx-react-lite"
import { NoContent } from '../../Components/NoContent/NoContent'

import { ContentCard } from '../../Components/ContentCard/ContentCard';
import { useRootStore } from "../../mobx/ProviderRootStore/ProviderRootStore"

const { Content } = Layout

export const ContentLayout = observer(() => {

	const { content$ } = useRootStore()

	return (
		<Content className="contentLayout">

			{	!content$.length ? (
				<NoContent />
			) : (
				content$.map(({img, title, description}, index) => {
					return(
						<ContentCard key={index} title={title} description={description} img={img} index={index} />
					)
				})
			)}
		</Content>
	)
})
