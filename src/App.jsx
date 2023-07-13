import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index Component={Home}/>
            <Route path="login" Component={Login}/>
            <Route path="users">
              <Route index Component={List}/>
              <Route path=":userId" Component={Single}/>
              <Route path="new" Component={New}/>
            </Route>
            <Route path="products">
              <Route index Component={List}/>
              <Route path=":productId" Component={Single}/>
              <Route path="new" Component={New}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
