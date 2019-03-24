
import React, {Component} from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/searchbar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/videolist";
var API_KEY='AIzaSyDc5lrSDhFvUGLWRtpzDtpWEySJLKI36pU';
//Creating Component
class App extends Component{
  constructor(props){
    super(props);
    this.state = {videos : []};
    YTSearch({key: API_KEY, term:"elonmusk"},(videos)=>{
     this.setState({videos})
    })
  }
 render(){
   return(
     <div>
       <SearchBar />
       <VideoList videos={this.state.videos}/>
     </div>
   )
 }
}
ReactDOM.render(<App />,document.querySelector(".container"))
//Rendering Component