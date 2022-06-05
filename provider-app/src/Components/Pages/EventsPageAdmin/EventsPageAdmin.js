import "./EventsPageAdmin.css";

import { useState } from "react";

import MyButton from "../../SharedComponents/MyButton/MyButton";



const EventsPageAdmin = () => {	
	return (
		<>
			<span className="EventsPageAdmin-top">
				<span className="EventsPageAdmin-top-title">
					Events
				</span>
			</span>
			<div className="EventsPageAdmin-container">
					<table className="EventsPageAdmin-table" id="myTable">
							<tr>
								<th>
									Event Name
									<input type="text" id="myInputName" className="EventsPageAdmin-table-title-search" onKeyUp={tableSearchFunctionName} placeholder="Search"></input>

								</th>
								<th>
									Provider Name
									<input type="text" id="myInputProvider" className="EventsPageAdmin-table-title-search" onKeyUp={tableSearchFunctionProvider} placeholder="Search"></input>

								</th>
								<th>
									Date Created
									<input type="text" id="myInputDate" className="EventsPageAdmin-table-title-search" onKeyUp={tableSearchFunctionDate} placeholder="Search"></input>

								</th>
								<th>
									Status
									<button className="EventsPageAdmin-table-title-button" >Active</button>

								</th>
							</tr>
							<tr>
								<td>
									Football Practice
								</td>
								<td>
									Athletisism A.E.
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
									Municipality of Chalandri
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
									Municipality of Cholargos
								</td>
								<td>
									5/7/2021
								</td>
								<td>
									Active
								</td>
							</tr>

						<span className="EventsPageAdmin-table-footer">
							<div class="pagination">
								<a href="#" class="off" onClick={pageLast}>First</a>
								<a href="#" class="off" onClick={pageFirst}>&laquo;</a>
								<a class="active" href="#" onClick={pageFunc}>1</a>
								<a href="#" onClick={pageFunc}>2</a>
								<a href="#" onClick={pageFunc}>3</a>
								<a href="#" onClick={pageNext}>&raquo;</a>
								<a href="#" onClick={pageLast}>Last</a>
							</div>
						</span>
					</table>
			</div>


		</>
	);

	// <script type = "text/javascript">
			
	// </script>


	
}

function tableSearchFunctionName() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInputName");
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function tableSearchFunctionProvider() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInputProvider");
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[1];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}
	

function tableSearchFunctionDate() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInputDate");
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[2];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

function pageFunc( ) {
	
}

function pageFirst( ) {
	
}

function pageLast( ) {
	
}

function pageNext( ) {
	
}


export default EventsPageAdmin;