import * as React from 'react';
import { Link } from 'gatsby';

export default function Component() {
	return (
		<>
			<p>This is the HOME page.</p>
			<p>
				Go to <Link to="/info">info</Link>.
			</p>
		</>
	);
}

