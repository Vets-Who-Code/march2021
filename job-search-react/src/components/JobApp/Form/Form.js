import React from 'react';
import SearchButton from './SearchButton/SearchButton';
import Remote from './Remote/Remote';
import ZipCode from './ZipCode/ZipCode';
import Distance from './Distance/Distance';

export default function Form(props) {

	return (
		<form
			onSubmit={(event) => props.data(event)}
			className="form-inline text-center job-grabber"
		>
			<label className="sr-only" htmlFor="zipCode">
				Zip Code
			</label>
			<input
				type="string"
				pattern="[0-9]{5}"
				className="form-control input-lg zip"
				id="zipCode"
				placeholder="Zip Code"
				required
			/>
			<input
				className="form-check-input"
				type="checkbox"
				id="inlineFormCheck"
			/>
			<label className="form-check-label" htmlFor="inlineFormCheck">
				Remote?
			</label>

			<div className="form-group" id="sel1">
				<label htmlFor="sel1"></label>
				<select
					className="form-control input-lg miles"
					id="sel1"
					name="sellist1"
				>
					{/* <!-- value is set in km --> */}
					<option value="0">Only in</option>
					<option value="8">5 mi.</option>
					<option value="16">10 mi.</option>
					<option value="24">15 mi.</option>
					<option value="40" defaultValue>
						25 mi.
					</option>
					<option value="80">50 mi.</option>
					<option value="161">100 mi.</option>
					<option value="322">200 mi.</option>
					<option value="5000">CONUS</option>
				</select>
			</div>
			<SearchButton />
		</form>
	);
}
