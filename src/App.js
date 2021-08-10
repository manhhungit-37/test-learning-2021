import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import About from "./component/About";
import Active from "./component/Active";
import AlertAndClick from "./component/AlertAndClick";
import Counter from "./component/Counter";
import CountTheme from "./component/CountTheme";
import { EffectDemo } from "./component/EffectDemo";
import Foo from "./component/Foo";
import Header from "./component/Header";
import Home from "./component/Home";
import Input from "./component/Input";
import LifeCycle from "./component/LifeCycle";
import Movie from "./component/Movie/Movie";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import Test from "./component/Test";
import TestClass from "./component/TestClass";
import TetsClass2 from "./component/TestClass2";
import TestClassComponent from "./component/TestClassComponent";
import TestContext from "./component/TestContext";
import TestEffectRe from "./component/TestEffectRe";
import TestFontAwesomeIcon from "./component/TestFontAwesomeIcon";
import TestReRender from "./component/TestReRender";
import Todo from "./component/Todo/Todo";
import ThemeContextProvider from "./contexts/ThemeContext";
import TodoContextProvider from "./contexts/TodoContext";
import { EffectSet } from './component/EffectSet';

library.add(fab, fas);


function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/product" component={Product} />
      <TestFontAwesomeIcon />
      <h1>Test</h1>
      <Test />
      <Active />
      <Input />
      <EffectDemo />
      <Counter /> 
      <TestClass />
      <LifeCycle />
      <Foo name="hung"/>
      <TestContext />
      <TetsClass2 />
      <TestClassComponent />
      <AlertAndClick />
      <ThemeContextProvider>
        <Navbar />
        <CountTheme />
      </ThemeContextProvider>
      <Movie />
      <TestEffectRe />
      <TodoContextProvider>
        <Todo />
      </TodoContextProvider>
      <h3>Test re-render</h3>
      <TestReRender />
      <EffectSet />
    </Router>
  );
}

export default App;
