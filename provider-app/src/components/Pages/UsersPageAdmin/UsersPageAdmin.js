import "./UsersPageAdmin.css";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const paginationComponentOptions = {
  rowsPerPageText: "Αποτελέσματα ανά σελίδα",
  rangeSeparatorText: "από",
};

const columns = [
  {
    name: "Όνοματεπώνημο",
    selector: (row) => row.name,
    sortable: true,
    width: "300px",
  },
  {
    name: "Εταιρία",
    selector: (row) => row.company,
    sortable: true,
    width: "200px",
  },
  {
    name: "Θέση",
    selector: (row) => row.position,
    sortable: true,
    width: "200px",
  },
];
const columns_admin = [
	{
	  name: "Διαγραφή χρήστη",
	  width: "150px",
	},
	{
	  name: "Αλλαγή κωδικού",
	  width: "150px",
	},
  ];
const UsersPageAdmin = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData(1, perPage);
  }, [perPage]);
  const fetchData = async (page, per_page, search) => {
    if (search === undefined) {
      search = "";
    }
    fetch(
      `https://www.mecallapi.com/api/attractions?page=${page}&per_page=${per_page}&eventName=${search}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
          setTotalRows(result.total);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };
  const handlePageChange = (page) => {
    fetchData(page, perPage);
  };
  const handlePerRowsChange = async (newPerPage, page) => {
    setPerPage(newPerPage);
  };
  const handleKeyPress = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length >= 3) {
      fetchData(1, perPage, e.target.value);
      console.log("pressed  ", e.target.value);
    }
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Φόρτωση δεδομένων ...</div>;
  } else {
    return (
      <div className="UsersPageAdmin-external">
        <div className="UsersPageAdmin-top-wrapper">
          <h1>Διαχείρηση χρηστών</h1>
        </div>
        <div>
          <div className="wrap-all-search">
            <span>Aναζήτηση:</span>
            <div className="UsersPageAdmin-span-search-wrap">
              <span className="material-icons-outlined">search</span>
              <input
                className="UsersPageAdmin-search"
                type={"text"}
                placeholder="Αναζήτηση χρήστη"
                onChange={handleKeyPress}
                value={search}
              ></input>
            </div>
          </div>
		  <div className="UsersPageAdmin-Datatable-Container">
			<div className="UsersPageAdmin-Datatable">
				<DataTable
				columns={columns}
				data={items}
				pagination
				paginationServer
				paginationTotalRows={totalRows}
				onChangePage={handlePageChange}
				onChangeRowsPerPage={handlePerRowsChange}
				paginationComponentOptions={paginationComponentOptions}
				/>
			</div>

			<div className="UsersPageAdmin-Datatable-Admin">
				<DataTable
				columns={columns_admin}
				data={items}
				paginationServer
				paginationTotalRows={totalRows}
				onChangePage={handlePageChange}
				onChangeRowsPerPage={handlePerRowsChange}
				paginationComponentOptions={paginationComponentOptions}
				/>
			</div>
		  </div>
        </div>
      </div>
    );
  }
};
export default UsersPageAdmin;
