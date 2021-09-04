import HomePage from "./Routes/Home/home";
import Skills from "./Routes/Skills/skills";
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/expertise" component={Skills} />
    </BrowserRouter>
  );
}

export default App;
