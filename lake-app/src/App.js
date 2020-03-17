import React from "react";

const App = ({ lakes, users }) => (
	<ul>
		{lakes.map((lake) => (
			<li key={lake.id}>
				Lake name: {lake.name} | Lake ID: {lake.id} | TrailHead:{" "}
				{lake.trailhead}
			</li>
		))}

		{users.map((user) => (
			<li>UserName: {user.name}</li>
		))}
	</ul>
);

export default App;
