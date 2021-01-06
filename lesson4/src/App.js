import React, {useState} from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect,
//   useHistory,
//   useLocation,
//   useRouteMatch,
//   useParams,
//   withRouter,
//   Prompt,
// } from "react-router-dom";

import {BrowserRouter as Router, Route, Link} from "./k-react-router-dom";

import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import _404Page from "./pages/_404Page";

function App() {
  const [count, setCount] = useState(1);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <div className="App">
        <Router>
          <Link to="/">首页</Link>
          <Link to="/user">用户中心</Link>
          <Link to="/login">登录</Link>
          <Link to="/product/123">商品</Link>

          {/* <Switch> */}
          <Route
            path="/"
            exact
            //children={children}
            //component={() => <HomePage />}
            component={HomePage}
            // render={render}
          >
            {/* children */}
          </Route>
          <Route path="/user" component={UserPage} />
          <Route path="/login" component={LoginPage} />
          {/* <Route path="/product/:id" component={Product} /> */}
          {/* <Route component={_404Page} /> */}
          {/* </Switch> */}
        </Router>
      </div>
    </>
  );
}

export default App;

function Product(props) {
  const {match} = props;
  console.log("match", match); //sy-log
  const {params, url} = match;
  const {id} = params;
  return (
    <div>
      Product: {id}
      <Link to={url + "/detail"}>详情</Link>
      <Route path={url + "/detail"} component={Detail} />
    </div>
  );
}

function Detail({match}) {
  return (
    <div>
      <h1>detail</h1>
    </div>
  );
}

//children function 不管路由是否匹配都会渲染
//  component
// render function

function children(props) {
  console.log("children props", props); //sy-log
  return <div>chiildren</div>;
}

function render(props) {
  console.log("render props", props); //sy-log
  return <div>render</div>;
}
