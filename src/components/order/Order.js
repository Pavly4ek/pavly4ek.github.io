import React from 'react';
import './Order.css';


const Order = () => {
	return (
		<div className="order" id="order">
			<div className="order_header">
				<h2>Need a Project?</h2>
				<p>Let us know what you're looking for in an agency. We'll take a look and see 
				if this could be the start of something beautiful.</p>
			</div>
			<form action="#" className="order_form">
				<div className="order_form_input" >
				<input placeholder="Name"/>
				<input placeholder="Email"/>
				</div>
				<input placeholder="Titel"/>
				<textarea placeholder="Comment" rows="5"></textarea>
				<submit className="btn">SEND MESSAGE</submit>
				
			</form>
		</div>
		)

}
export default Order;