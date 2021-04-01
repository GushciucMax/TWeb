import { FolderOpenOutlined, CarryOutOutlined, CloudOutlined } from '@ant-design/icons';

export const MAIN_PATH = '/main'
export const CALENDAR_PATH = '/calendar'
export const DOCS_PATH = '/docs'

export const HOME_PATH = '/'
export const SHOP_PATH = '/shop'
export const ABOUT_PATH = '/about'

export const MenuRoot = [
	{
		id: 0,
		name: "Main",
		icon: <FolderOpenOutlined />,
		path: MAIN_PATH
	},
	{
		id: 1,
		name: "Calendar",
		icon: <CarryOutOutlined />,
		path: CALENDAR_PATH
	},
	{
		id: 2,
		name: "Cloud Docs",
		icon: <CloudOutlined />,
		path: DOCS_PATH
	}
]

export const NavRoot = [
	{
		id: 0,
		name: "Home",
		path: HOME_PATH
	},
	{
		id: 1,
		name: "Shop",
		path: SHOP_PATH
	},
	{
		id: 2,
		name: "About Us",
		path: ABOUT_PATH
	}
]
