import "./EventsPage.css";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const paginationComponentOptions = {
  rowsPerPageText: "Αποτελέσματα ανά σελίδα",
  rangeSeparatorText: "από",
};

const columns = [
  {
    name: "Δρραστηριότητα",
    selector: (row) => row.title,
    sortable: true,
    width: "300px",
  },
  {
    name: "Ημερομηνία",
    selector: (row) => row.eventDate,
    sortable: true,
    width: "200px",
  },
  {
    name: "Κατάσταση",
    selector: (row) =>
      row.active ? (
        <span className="status-active">Ενεργό</span>
      ) : (
        <span className="status-inactive">Ανενεργό</span>
      ),
    width: "200px",
  },
];
const EventsPage = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `../newEvent`;
    navigate(path);
  };

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const companyId = useSelector(
    (state) => state.persistedReducer.global.companyId
  );
  const userID = useSelector((state) => state.persistedReducer.global.userId);
  console.log(companyId, userID);
  useEffect(() => {
    fetchData(0, perPage);
  }, [perPage]);
  const fetchData = async (page, per_page, search) => {
    if (search === undefined) {
      search = "";
    }
    fetch(
      `http://localhost:3001/api/v1/companies/${companyId}/events?pageNumber=${page}&pageSize=${per_page}&employeeId=${userID}&eventName=${search}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
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
    console.log("pressed  ", e.target.value);
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Φόρτωση δεδομένων ...</div>;
  } else {
    return (
      <div className="EventsPage-external">
        <div className="EventsPage-top-wrapper">
          <h1>Οι δραστηριότητες μου</h1>
          <button onClick={routeChange} className="EventsPage-add-new">
            <span className="material-icons-outlined">add</span> Προσθήκη
          </button>
        </div>
        <div>
          <div className="wrap-all-search">
            <span>Aναζήτηση:</span>
            <div className="EventsPage-span-search-wrap">
              <span className="material-icons-outlined">search</span>
              <input
                className="EventsPage-search"
                type={"text"}
                placeholder="Αναζήτηση δραστηριότητας"
                onChange={handleKeyPress}
                value={search}
              ></input>
            </div>
          </div>
          <div className="EventsPage-Datatable">
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
    );
  }
};
export default EventsPage;
