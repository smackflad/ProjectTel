import "./EventsOverviewPage.css";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

// const [showCreate, setShowCreate] = useState(false);s
const paginationComponentOptions = {
  rowsPerPageText: "Αποτελέσματα ανά σελίδα",
  rangeSeparatorText: "από",
};


 
const EventsPage = () => {
  const columns = [
    {
      name: "Δρραστηριότητα",
      selector: (row) => row.name,
      sortable: true,
      width: "300px",
    },
    {
      name: "Ημερομηνία",
      selector: (row) => row.date,
      sortable: true,
      width: "200px",
    },
    {
      name: "Εκκρεμότητα",
      selector: (row) =>
     
        
    
      <div class="action_btn">
  
              <button name="submit" class="event-accept" type="submit" value="accept" onClick={(e) => {
                  
                setActive(true);
                window.location.reload();
                
                }}>Accept </button>
              /
              <button name="submit" class="event-decline" type="submit" value="decline" onClick={(e) => {
                    setActive(false);
                   window.location.reload();
                }}>Decline </button>
  
              <p id="saved"></p>
              </div>
         
     
         
    },
    
  ];
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [active,setActive]=useState("false");

  useEffect(() => {
    fetchData(1, perPage);
  }, [perPage]);
  const fetchData = async (page, per_page, search,active) => {
    if (search === undefined) {
      search = "";
    }
    fetch(
      `https://www.mecallapi.com/api/attractions?page=${page}&per_page=${per_page}&eventName=${search}%active=${active}`
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
      <div className="EventsPage-external">
        <div className="EventsPage-top-wrapper">
          <h1>Οι δραστηριότητες μου</h1>
          
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
