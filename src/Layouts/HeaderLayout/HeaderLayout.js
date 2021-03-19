import React from 'react'
import { Layout, Menu } from 'antd';
import { NavRoot } from "../../helpers/constants";
import {Link } from "react-router-dom";

const { Header } = Layout

export const HeaderLayout = () => {
    return (
        <Header className="header" >
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['4']}>

			{
				NavRoot.map((nav) => {
					return (
						<Menu.Item key={nav.id}>
							<Link to={nav.path}> { nav.name }</Link>
						</Menu.Item>
					)
				})
			}
                
            </Menu>
        </Header>
    );
}
