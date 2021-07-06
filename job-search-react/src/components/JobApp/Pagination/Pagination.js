import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			marginTop: theme.spacing(2),
		},
	},
}));

export default function Paginate() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Pagination count={10} />
			<Pagination count={10} color="primary" />
			<Pagination count={10} color="secondary" />
			<Pagination count={10} disabled />
		</div>
	);
}
