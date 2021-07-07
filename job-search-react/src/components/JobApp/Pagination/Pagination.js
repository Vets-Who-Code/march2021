import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

export default function Paginate({ theme, jobData }) {
	const useStyles =
		theme === 'light'
			? makeStyles({ root: '' })
			: makeStyles((theme) => ({
					root: {
						'& ul > li > button:not(.Mui-selected)': {
							backgroundColor: 'transparent',
							color: '#ffffff',
						},
					},
			  }));

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
				<div className={`adzuna ${theme === 'light' ? '' : 'dark-theme'}`}>
					Powered By{' '}
					<a
						href="https://www.adzuna.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Adzuna{' '}
					</a>
					<img class="adzuna-logo" src="images/adzuna.png" alt="Adzuna Logo" />
				</div>
			</div>
		</div>
	);
}
