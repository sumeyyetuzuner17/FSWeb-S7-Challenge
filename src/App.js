import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import SiparisTamam from "./SiparisTamam";

const App = () => {
  const [data, setData] = useState();
  console.log("APP",data)
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  path="/pizza">
          <Form setData={setData}/>
        </Route>
        
        <Route  path="/siparis">
          <SiparisTamam  data={data}/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
