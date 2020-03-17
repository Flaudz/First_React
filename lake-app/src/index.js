import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const lakeList = [
	{ id: 1, name: "Echo Lake", trailhead: "Echo Lake" },
	{ id: 2, name: "Maud Lake", trailhead: "Wright's Lake" },
	{ id: 3, name: "Cascade Lake", trailhead: "Bayview" }
];

const usersList = [
	{ id: 1, name: "Nicolaj Thygesen", vip: true },
	{ id: 2, name: "Jimmy Karlson", vip: true },
	{ id: 3, name: "White Theme Boy", vip: false }
];

ReactDOM.render(
	<App lakes={lakeList} users={usersList} />,
	document.getElementById("root")
);
serviceWorker.unregister();
