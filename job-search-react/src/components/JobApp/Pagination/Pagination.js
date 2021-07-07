import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		marginTop: 20,
	},
});

export default function Paginate({ theme, jobData }) {
	const classes = useStyles();
	return (
		<div className={`pagination-wrapper ${jobData.data ? '' : 'hidden'}`}>
			<div className={classes.root}>
				<Pagination
					count={10}
					showFirstButton
					showLastButton
					color={theme === 'light' ? 'primary' : 'secondary'}
				/>
				<div className="adzuna">
					Powered By <a href="https://www.adzuna.com/">Adzuna </a>
					<img class="adzuna-logo" src="images/adzuna.png" alt="Adzuna Logo" />
				</div>
			</div>
		</div>
	);
}
