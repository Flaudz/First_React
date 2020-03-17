import React from "react";

const App = ({ lakes, users }) => (
	<ul>
		{lakes.map((lake) => (
			<li key={lake.id}>
				Lake name: {lake.name} | Lake ID: {lake.id} | TrailHead:{" "}
				{lake.trailhead}
			</li>
		))}

		<div>
			{users.map((user) => (
				<li key={user.id} className="asd">
					UserName: {user.name} | VIP: {user.vip.toString()}
				</li>
			))}
		</div>
	</ul>
);

export default App;
