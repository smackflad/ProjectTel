import "./UsersPageAdmin.css";

import { useState } from "react";

import MyButton from "../../generalComponents/MyButton/MyButton";




const UsersPageAdmin = () => {	
	return (
		<>
			<span className="UsersPageAdmin-top">
				<span className="UsersPageAdmin-top-title">
					Users
				</span>
			</span>
			<div className="UsersPageAdmin-container">
				<span className="UsersPageAdmin-tables-container">
					<table className="UsersPageAdmin-table" id="myTable">
							<tr>
								<th>
									Users
									<input type="text" id="myInputName" className="UsersPageAdmin-table-title-search" onKeyUp={tableSearchFunctionName} placeholder="Search"></input>

								</th>
							</tr>
							<tr>
								<td onHover={changeBackgroundTable2}>
									John Stamos
								</td>
								<td onHover={changeBackgroundTable2}>
									Athletisism A.E.
								</td>
								<td onHover={changeBackgroundTable2}>
									President
								</td>
							</tr>

							<tr>
								<td onHover={changeBackgroundTable2}>
									George Bush
								</td>
								<td onHover={changeBackgroundTable2}>
									U.S.A.
								</td>
								<td onHover={changeBackgroundTable2}>
									Former President
								</td>
							</tr>
					</table>

					<table className="UsersPageAdmin-table-2" id="myTable2">
							<tr>
								<td onHover={changeBackgroundTable}>
									<a href="#"> delete user </a>
								</td>
								<td onHover={changeBackgroundTable}>
									<a href="#"> reset password </a>
								</td>
							</tr>

							<tr>
								<td>
									<a href="#"> delete user </a>
								</td>
								<td>
									<a href="#"> reset password </a>
								</td>
							</tr>
							
					</table>
				</span>
				<span className="UsersPageAdmin-table-footer">
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

function changeBackgroundTable() {
	
}

function changeBackgroundTable2() {
	
}


export default UsersPageAdmin;