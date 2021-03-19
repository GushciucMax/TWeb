import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import { HeaderLayout } from './Layouts/HeaderLayout/HeaderLayout';
import { MenuLayout } from './Layouts/MenuLayout/MenuLayout';
import { ContentLayout } from './Layouts/ContentLayout/ContentLayout';
import { FooterLayout } from './Layouts/FooterLayout/FooterLayout';
import { MAIN_PATH, CALENDAR_PATH, DOCS_PATH, HOME_PATH, SHOP_PATH, ABOUT_PATH } from './helpers/constants';
import { NoContent } from './Components/NoContent/NoContent';
import { Calendard } from './Components/Calendar/Calendar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const { Content } = Layout

function App() {
  return (
	  <Router>

        <Layout>
			<HeaderLayout />

			<Content style={{ padding: '0 50px', margin: '30px 0'}}>
		        <Layout className="site-layout-background" style={{ padding: '24px 0'}}>
		        	<MenuLayout />

					<Switch>
			          <Route exact path={MAIN_PATH}>
					  	 <ContentLayout />
			          </Route>
			          <Route exact path={CALENDAR_PATH}>
			             <Calendard />
			          </Route>
			          <Route exact path={DOCS_PATH}>
			            <NoContent />
			          </Route>
			        </Switch>

				</Layout>
		    </Content>

			<FooterLayout />
        </Layout>

		</Router>
  )
}

export default App;
