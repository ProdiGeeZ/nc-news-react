import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Header, NavBar, UserHeader, Footer } from './components/index';
import Home from './components/routes/Home/Home';
import Articles from './components/routes/Articles/Articles';
import ArticleDetail from './components/routes/Articles/ArticleDetail';
import Topics from './components/routes/Topics/Topics';
import Users from './components/routes/Users/Users';


function App() {
  return (
    <>
      <Header header={'NC News Friends.'}/>
      <UserHeader name={'Stuart'}/>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<ArticleDetail />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/users" element={<Users />}/>
        </Routes>
      <Footer footerText={"This is footer mate."}/>
    </>
  )
}

export default App;
