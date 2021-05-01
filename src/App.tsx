import React from 'react'
import Layout from './components/Layout';
import { 
  BrowserRouter as Router ,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import StockTaking from './pages/StockTaking';
import Settings from './pages/Settings';
import ErrorPage from './pages/ErrorPage';

const AppScreen = "h-screen w-screen bg-gray-200";

const LayoutWrapper:React.FC = ({children}) => {
  return <Layout>{children}</Layout>
};

function App() {

  return (
    <Router>
      <div className={AppScreen}>
        <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route exact path="/dashboard">
          <LayoutWrapper>
            <Dashboard />
          </LayoutWrapper>
        </Route>
        <Route exact path="/inventory">
          <LayoutWrapper>
            <Inventory />
          </LayoutWrapper>
        </Route>
        <Route exact path="/stock-taking">
          <LayoutWrapper>
            <StockTaking />
          </LayoutWrapper>
        </Route>
        <Route exact path="/settings">
          <LayoutWrapper>
            <Settings />
          </LayoutWrapper>
        </Route>
        <Route path="/*">
          <LayoutWrapper>
            <ErrorPage />
          </LayoutWrapper>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
