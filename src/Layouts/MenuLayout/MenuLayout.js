import React from 'react'
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const { Sider } = Layout
const { SubMenu } = Menu

export const MenuLayout = () => {
    return (

         <Sider className="site-layout-background" width={200}>
         	<Menu
            	mode="inline"
            	defaultSelectedKeys={['1']}
            	defaultOpenKeys={['sub1']}
            	style={{ height: '100%' }}
         	>
            	<SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            		<Menu.Item key="1">option1</Menu.Item>
					<Menu.Item key="2">option2</Menu.Item>
            	</SubMenu>
				<SubMenu key="sub2" icon={<UserOutlined />} title="subnav 2">
            		<Menu.Item key="3">option3</Menu.Item>
            	</SubMenu>
        	</Menu>
        </Sider>
    );
};