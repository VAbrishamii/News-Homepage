import React,{Component} from "react";
import Navbar from './component/Navbar';
import Cover from './component/Cover';
import Cards from "./component/Cards";
import Codeby from "./component/Codeby";


class App extends Component{
  render() {
    return(
      <div>
        <Navbar />
        <Cover />
        <Cards />
        <Codeby />
       
       
      </div>
    )
  }
}

export default App;
