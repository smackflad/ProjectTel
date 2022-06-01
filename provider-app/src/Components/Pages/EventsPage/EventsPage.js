import "./EventsPage.css";

import { useState } from "react";


const EventsPage = () => {	
	return (
		<>
			<span className="EventsPage-top">
				<span className="EventsPage-top-title">
					Events
				</span>
		
				<button className="EventsPage-top-right-button"> New event </button>
			</span>
			<div className="EventsPage-container">
					<table className="EventsPage-table" id="myTable">
							<tr>
								<th>
									Event Name
									<input type="text" id="myInputName" className="EventsPage-table-title-search" onKeyUp={tableSearchFunctionName} placeholder="Search"></input>

								</th>
								<th>
									Date Created
									<input type="text" id="myInputDate" className="EventsPage-table-title-search" onKeyUp={tableSearchFunctionDate} placeholder="Search"></input>

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
								<a href="#" onClick={pageLast}>First</a>
								<a href="#" onClick={pageFirst}>&laquo;</a>
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

function tableSearchFunctionName( ) {
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

function tableSearchFunctionDate( ) {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInputDate");
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

function pageFunc( ) {
	
}

function pageFirst( ) {
	
}

function pageLast( ) {
	
}

function pageNext( ) {
	
}



export default EventsPage;