import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import SiparisTamam from "./SiparisTamam";
import styled from "styled-components";

const SCDiv = styled.div`
  text-align: center;
`;

const App = () => {
  const [data, setData] = useState();
  console.log("APP", data);
  return (
    <SCDiv>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pizza">
          <Form setData={setData} />
        </Route>

        <Route path="/siparis">
          <SiparisTamam data={data} />
        </Route>
      </Switch>
    </SCDiv>
  );
};
export default App;
