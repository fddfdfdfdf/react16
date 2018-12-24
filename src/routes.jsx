import React from 'react';
import Loadable from 'react-loadable';
import {
  Router as HashRouter , // 或者是HashRouter、MemoryRouter
  Route,
  Link as ALink,
} from 'react-router-dom';
import createHistory from 'history/createHashHistory'
const history = createHistory();



import AppComponent from './components/AppComponent';
import HomeComponent from './components/HomeComponent';
import LoadingComponent from './components/LoadingComponent';

const routes = (
  <div>
    <HashRouter history={history}>
      <AppComponent>
        <ul>
          <li><ALink to="/">首页</ALink></li>
          <li><ALink to="/about">关于</ALink></li>
          <li><ALink to="/topics">论题</ALink></li>
          <li><ALink to="/counter">计数器</ALink></li>
        </ul>
        <hr />

        <Route exact path="/" component={HomeComponent} />
        <Route
          path="/about"
          component={Loadable({
            loader: () => import('./components/AboutComponent'),
            loading: LoadingComponent,
          })}
        />
        <Route
          path="/topics"
          component={Loadable({
            loader: () => import('./components/TopicsComponent'),
            loading: LoadingComponent,
          })}
        />
        <Route
          path="/counter"
          component={Loadable({
            loader: () => import('./components/CounterComponent'),
            loading: LoadingComponent,
          })}
        />
      </AppComponent>
    </HashRouter>
  </div>
);

export default routes;
