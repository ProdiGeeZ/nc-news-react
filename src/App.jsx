import '../stylesheets/App.css'
import './momentConfig'
import { UserProvider } from './UserContext';
import { Routes, Route } from 'react-router-dom';
import { Header, NavBar, UserHeader, Footer } from './components/index';
import { Home, Articles, ArticleDetail, Topics, Users } from './components/routes/routeIndex';

function App() {
  return (
    <UserProvider>
      <>
        <Header />
        <UserHeader username={'weegembump'} />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path={`/articles/:article_id`} element={<ArticleDetail />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/users" element={<Users />} />
        </Routes>
        <Footer footerText={"This is footer mate."} />
      </>
    </UserProvider>
  )
}

export default App;
