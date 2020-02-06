import React from 'react';
import MaterialService from './Materials/MaterialService';
import Material from './Materials/Material';
import BowPage from './Pages/BowPage';
import {HashRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import HeadPage from './Pages/HeadPage';

interface Props {

}

interface State {
  materials: Material[],
}

const Menu: React.FunctionComponent = () => (
  <nav>
    <ol>
      <li><Link to="/bow">Bow</Link></li>
      <li><Link to="/head">Head</Link></li>
    </ol>
  </nav>
)

class App extends React.PureComponent<Props, State> {

  public constructor(props: Props) {
    super(props);

    this.state = {
      materials: MaterialService.GetInstance().GetAll(),
    };
  }

  public render(): JSX.Element {
    return (
      <Router>
        <Menu />
        <Switch>
          <Route path="/bow">
            <BowPage allMaterials={this.state.materials}/>
          </Route>
          <Route path="/head">
            <HeadPage allMaterials={this.state.materials}/>
          </Route>
          <Route path="/">
            <Redirect to="/bow"/>
          </Route>
        </Switch>
      </Router>
      
    );
  }
}

export default App;
