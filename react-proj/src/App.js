import "./App.css";
import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./AllMeetups";
import NewMeetupPage from "./NewMeetup";
import FavoritesPage from "./Favorites";
import MainNavigation from "./components/layouts/MainNavigation";
import Layout from "./components/layouts/Layout";
function App() {
  return (
    <Layout>
      <MainNavigation />
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup" exact>
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
