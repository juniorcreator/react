import React from 'react';
import ReactDom from 'react-dom';


const Appheader = () => {
	return <h1> Todo list </h1>;
}
const Appsearch = () => {
	return <input type="text" placeholder="search" />;
}
const Applist = () => {
	return (
		<ul>
	        <li>Learn react</li>
	        <li>Build awesome app</li>
	      </ul>
		);
}
const Todo = () => {
	const isloginned = false;
	const logined = <span> Welcome back </span>;
	const unlogined = <span> Login please </span>;
	return (
		<div>
			{ isloginned ? logined : unlogined }
			<Appheader />
	      	<Appsearch />
	      	<Applist />
	    </div>
		);
}

const roots = document.getElementById('root');

ReactDom.render(<Todo />, roots);