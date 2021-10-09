import React from "react";
import { Switch, Route } from 'react-router';
import './App.scss';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import News from "./containers/News";
import Music from "./containers/Music";
import Photo from "./containers/Photo";
import Video from "./containers/Video";

function App() {
  return (
	<div className="App">
		<Header />
		<Switch>
			<Route exact path="/news" component={News} />
			<Route exact path="/music" component={Music} />
			<Route exact path="/photo" component={Photo} />
			<Route exact path="/video" component={Video} />
			<Route path="/" component={Home} />
		</Switch>
		<Footer />
		<ToastContainer
			position="top-right"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
		/>
	</div>
  );
}

export default App;
