import "./EventsPage.css";

import { useState } from "react";

import MyButton from "../../SharedComponents/MyButton/MyButton";


function myFunction() {
	// Declare variables 
		var input, filter, table, tr, td, i;
		input = document.getElementById("myInput");
		filter = input.value.toUpperCase();
		table = document.getElementById("myTable");
		tr = table.getElementsByTagName("tr");
	
		// Loop through all table rows, and hide those who don't match the search 
		for (i = 0; i < tr.length; i++) {
	td = tr[i].getElementsByTagName("td")[0];
	if (td) {
		if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
		tr[i].style.display = "";
		} else {
		tr[i].style.display = "none";
		}
		} 
	}
	}


const EventsPage = () => {	
	return (
		<div>
			<span className="EventsPage_top">
				<span className="EventsPage-top-title">
					Events
				</span>
				<span className="EventsPage-top-right-button">
					<MyButton labelTxt={"New event"} bgColor={"#1aabbf"} ftColor={"#ffffff"}> </MyButton>
				</span>
			</span>
			<div className="EventsPage-container">
					<table className="EventsPage-table" id="myTable">
							<tr>
								<th>
									Event Name
									<input type="text" id="myInput" className="EventsPage-table-title-search" onkeyup="myFunction()" placeholder="Search"></input>

								</th>
								<th>
									Date Created
									<input className="EventsPage-table-title-search" placeholder="Search"></input>

								</th>
								<th>
									Status
									<button className="EventsPage-table-title-button" >Active</button>

								</th>
							</tr>
							<tr>
								<td>
									Football Practice
								</td>
								<td>
									1/1/2022
								</td>
								<td>
									Active
								</td>
							</tr>

							<tr>
								<td>
									Painting
								</td>
								<td>
									11/9/2012
								</td>
								<td>
									Inactive
								</td>
							</tr>

							<tr>
								<td>
									Running
								</td>
								<td>
									5/7/2021
								</td>
								<td>
									Active
								</td>
							</tr>

						<span className="EventsPage-table-footer">
							<div class="pagination">
								<a href="#">&laquo;</a>
								<a class="active" href="#">1</a>
								<a href="#">2</a>
								<a href="#">3</a>
								<a href="#">4</a>
								<a href="#">5</a>
								<a href="#">6</a>
								<a href="#">&raquo;</a>
							</div>
						</span>
					</table>
			</div>

		
		</div>
		
	);

	
};




export default EventsPage;