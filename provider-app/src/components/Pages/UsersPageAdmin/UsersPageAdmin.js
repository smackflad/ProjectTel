import "./UsersPageAdmin.css";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const paginationComponentOptions = {
  rowsPerPageText: "Αποτελέσματα ανά σελίδα",
  rangeSeparatorText: "από",
};

const DeleteUser = async (userID, refresh) => {
  var requestOptions = {
    method: "DELETE",
  };

  fetch(`http://localhost:3001/api/v1/employee/${userID}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      refresh();
    })
    .catch((error) => console.log("error", error));
};

const columns = [
  {
    name: "Όνοματεπώνημο",
    selector: (row) => row.firstName + " " + row.lastName,
    sortable: true,
    width: "300px",
  },
  {
    name: "Εταιρία",
    selector: (row) => row.companyName,
    sortable: true,
    width: "200px",
  },
  {
    name: "Ρόλος",
    selector: (row) => row.role,
    sortable: true,
    width: "200px",
  },
  {
    name: "Διαγραφή",
    selector: (row) => (
      <button
        onClick={() => DeleteUser(row.id, row.refresh)}
        className="delete-employee-button"
      >
        Διαγραφή χρήστη
      </button>
    ),
  },
];

const UsersPageAdmin = () => {
  let navigate = useNavigate();
  const { role } = useSelector((state) => state.persistedReducer.global);
  useEffect(() => {
    if(role !== "admin"){
      navigate("/")
    }
  }, [role])
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);

  const refreshData = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    fetchData(0, perPage);
  }, [perPage, refresh]);
  const fetchData = async (page, per_page, search) => {
    if (search === undefined) {
      search = "";
    }
    fetch(
      `http://localhost:3001/api/v1/employee?search=${search}&pageSize=${perPage}&pageNumber=${page}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          result.items.forEach((item) => {
            item.refresh = refreshData;
          });
          console.log(result);
          setItems(result.items);
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

    fetchData(0, perPage, e.target.value);
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
          </div>
        </div>
      </div>
    );
  }
};
export default UsersPageAdmin;
