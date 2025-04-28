import { Layout, Menu } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import Banner from './assets/banner.png';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="flex flex-col min-h-screen relative h-full">
      <Header className="!bg-white shadow top-0 w-full z-10">
        <div className="container mx-auto px-2 sm:px-2 lg:px-2 flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-blue-600">WanwuAI</div>
          <Menu mode="horizontal" className="border-none w-1/4 flex justify-end" items={[
            { key: 'home', label: <a href="/">Home</a> },
            { key: 'about', label: <a href="https://github.com/wanwuai">About</a> },
            { key: 'contact', label: <a href="https://github.com/yugasun" rel="noopener noreferrer">Contact</a> },
          ]} />
        </div>
      </Header>
      <Content className="flex flex-col items-center justify-center flex-1 bg-gradient-to-b from-blue-50 to-white">
        <a
          className="flex items-center justify-center w-full h-full"
          href="https://github.com/wanwuai"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '100%',
            backgroundColor: 'white',
            backgroundImage: `url(${Banner})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            display: 'block'
          }}
        >
        </a>
      </Content>
      <Footer className="!bg-transparent bottom-0 w-full">
        <div className="container mx-auto text-center text-gray-400">
          © {new Date().getFullYear()} WanwuAI. All rights reserved.
        </div>
      </Footer>
    </Layout>
  );
}

export default App;
