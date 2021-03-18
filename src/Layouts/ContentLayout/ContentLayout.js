import React from 'react'
import { Layout, Breadcrumb } from 'antd';
import { MenuLayout } from '../MenuLayout/MenuLayout';

const { Content } = Layout

export const ContentLayout = () => {
    return (
        <Content style={{ padding: '0 50px' }}>
	        <Breadcrumb style={{ margin: '16px 0' }}>
	            <Breadcrumb.Item>Home</Breadcrumb.Item>
	            <Breadcrumb.Item>List</Breadcrumb.Item>
	            <Breadcrumb.Item>App</Breadcrumb.Item>
	        </Breadcrumb>
	        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
	        	<MenuLayout />
	        	<Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
	    	</Layout>
    	</Content>
	);
}
