import "./EventsPageAdmin.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";

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
    name: "Παραγωγός",
    selector: (row) => row.companyName,
    sortable: true,
    width: "200px",
  },
  {
    name: "Ημερομηνία",
    selector: (row) =>
      row.eventDate !== null && typeof row.eventDate === "array"
        ? row.eventDate[0]
        : row.eventDate,
    sortable: true,
    width: "200px",
  },
  {
    name: "Εκκρεμότητα",
    selector: (row) => (
      <div className="action-btn">
        <button
          name="submit"
          className="event-accept"
          type="submit"
          value="accept"
          // onClick={(e) => {
          //   setActive(true);
          //   window.location.reload();
          // }}
        >
          Accept{" "}
        </button>
        /
        <button
          name="submit"
          className="event-decline"
          type="submit"
          value="decline"
          // onClick={(e) => {
          //   setActive(false);
          //   window.location.reload();
          // }}
        >
          Decline{" "}
        </button>
        <p id="saved"></p>
      </div>
    ),
  },
];
const EventsPageAdmin = () => {
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

  useEffect(() => {
    fetchData(0, perPage);
  }, [perPage]);
  console.log(companyId, userID);
  const fetchData = async (page, per_page, searchTxt) => {
    fetch(
      `http://localhost:3001/api/v1/companies/${companyId}/events?pageNumber=${page}&pageSize=${per_page}&employeeId=${userID}${
        searchTxt !== undefined ? "&eventName=" + searchTxt : ""
      }`
    )
      .then((res) => res.json())
      .then(
        (result) => {
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
      <div className="EventsPageAdmin-external">
        <div className="EventsPageAdmin-top-wrapper">
          <h1>Διαχείρηση δραστηριοτήτων</h1>
        </div>
        <div>
          <div className="wrap-all-search">
            <span>Aναζήτηση:</span>
            <div className="EventsPageAdmin-span-search-wrap">
              <span className="material-icons-outlined">search</span>
              <input
                className="EventsPageAdmin-search"
                type={"text"}
                placeholder="Αναζήτηση δραστηριότητας"
                onChange={handleKeyPress}
                value={search}
              ></input>
            </div>
          </div>
          <div className="EventsPageAdmin-Datatable">
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
export default EventsPageAdmin;
