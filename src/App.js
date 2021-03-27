import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import { HeaderLayout } from './Layouts/HeaderLayout/HeaderLayout';
import { MenuLayout } from './Layouts/MenuLayout/MenuLayout';
import { ContentLayout } from './Layouts/ContentLayout/ContentLayout';
import { FooterLayout } from './Layouts/FooterLayout/FooterLayout';
import { MAIN_PATH, CALENDAR_PATH, DOCS_PATH, HOME_PATH, SHOP_PATH, ABOUT_PATH } from './helpers/constants';
import { Calendard } from './Components/Calendar/Calendar';
import { contentMock } from './Mock/content';
import { NoContent } from './Components/NoContent/NoContent'

import FormDocs from './Components/FormDocs/FormDocs'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const { Content } = Layout

function App() {

	const [initialState, setInitialState] = useState(contentMock)

  return (
	  <Router>

        <Layout>
			<HeaderLayout />

			<Content style={{ padding: '0 50px', margin: '30px 0'}}>
		        <Layout className="site-layout-background" style={{ padding: '24px 0'}}>
		        	<MenuLayout />

					<Switch>
			          <Route exact path={MAIN_PATH}>
					  	 <ContentLayout initialState={initialState} setInitialState={ setInitialState}/>
			          </Route>
			          <Route exact path={CALENDAR_PATH}>
			             <Calendard />
			          </Route>
			          <Route exact path={DOCS_PATH}>
			             <FormDocs />
			          </Route>
					  <Route exact path={HOME_PATH}>
					  	 <NoContent />
			          </Route>
			          <Route exact path={SHOP_PATH}>
			             <NoContent />
			          </Route>
			          <Route exact path={ABOUT_PATH}>
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
