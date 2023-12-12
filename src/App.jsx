import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Header, NavBar, UserHeader, Footer } from './components/index';
import { Home, Articles, ArticleDetail, Topics, Users } from './components/routes/index';

function App() {
  return (
    <>
      <Header/>
      <UserHeader name={'Stuart'}/>
      <NavBar/>
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
