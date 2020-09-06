import React from 'react';

//STYLING IMPORTS
import './App.css';
import 'antd/dist/antd.css';
import { Affix, Layout} from 'antd';

//COMPONENTS IMPORTS
import Navbar from "./pageLayout/Navbar";
import AppFooter from "./pageLayout/appFooter";
import ImageComponent from "./content/ImageComponent";
import AboutMe from "./content/AboutMe";
import WorkExperience from "./content/WorkExperience";
import Projects from "./content/Projects";
import MyPassions from "./content/MyPassions";
import ContactMe from "./content/ContactMe";

const { Header, Footer, Content } = Layout;

function App() {
  return (
      <>
          <Layout style={{maxWidth: "100vw"}}>
              <Affix offsetTop={0}>
                  <Header>
                      <Navbar/>
                  </Header>
              </Affix>

              <Content>
                  <ImageComponent />
                  <AboutMe/>
                  <WorkExperience />
                  <Projects/>
                  <MyPassions/>
                  <ContactMe />
              </Content>

              <Footer style={{background: '#dcdcdc'}}>
                 <AppFooter />
              </Footer>
          </Layout>
    </>
  );
}

export default App;
