import * as React from 'react';
import { Link } from 'gatsby';

export default function Component() {
	return (
		<>
			<p>This is the info page.</p>
			<p>
				Go back <Link to="/">home</Link>.
			</p>
		</>
	);
}
