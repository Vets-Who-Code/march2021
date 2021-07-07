import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

export default function Paginate() {
	return (
		<div>
			<div>
				<Pagination count={10} color="primary" />
			</div>
			<div className="adzuna">
				Powered By <a href="https://www.adzuna.com/">Adzuna </a>
				<img
					class="adzuna-logo"
					src="../../../../public/images/adzuna.png"
					alt="Adzuna Logo"
				/>
			</div>
		</div>
	);
}
