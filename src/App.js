import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import { HeaderLayout } from './Layouts/HeaderLayout/HeaderLayout';
import { ContentLayout } from './Layouts/ContentLayout/ContentLayout';
import { FooterLayout } from './Layouts/FooterLayout/FooterLayout';

function App() {
  return (
    <>
        <Layout>
			<HeaderLayout />
            <ContentLayout />
			<FooterLayout />
        </Layout>
    </>
  );
}

export default App;
