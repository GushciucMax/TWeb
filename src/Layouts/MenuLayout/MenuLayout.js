import React from 'react'
import { Layout, Menu } from 'antd';
import { MenuRoot } from "../../helpers/constants";
import {Link } from "react-router-dom";


const { Sider } = Layout

export const MenuLayout = () => {
    return (

         <Sider className="site-layout-background" width={200}>
         	<Menu
            	mode="inline"
            	defaultSelectedKeys={['0']}
            	style={{ height: '100%' }}
         	>
				{
					MenuRoot.map((menu) => {
						return (
							<Menu.Item key={menu.id} icon={ menu.icon }>
								<Link to={menu.path}> { menu.name }</Link>
							</Menu.Item>
						)
					})
				}

        	</Menu>
        </Sider>
    );
};
