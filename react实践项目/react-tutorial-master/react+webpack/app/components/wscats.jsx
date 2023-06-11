//var React = require('react');
import React, { Component } from 'react';
var routes = require("../routes.js");
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';

var IndexA = require('./index/indexA.jsx');
var IndexB = require('./index/indexB.jsx');
console.log(routes)
//新版本的写法 推荐
//class Wscats extends React.Component {
class Wscats extends Component {
	render() {
		return( 
			<div>
				<div>Wscats</div>
				<Link to="/index/childA">childA</Link> <Link to="/index/childB">childB</Link>
				{renderRoutes(this.props.route.routes)}
				{console.log(this.props.route.routes)}
				{console.log(routes)}
			</div>
		)
	}
}
module.exports = Wscats;