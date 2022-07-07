import "./EventsOverviewPage.css";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { useUpdateActiveMutation, useDeleteEventMutation } from "../../../store/api/adminApi";
import { QueryStatus } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

// const [showCreate, setShowCreate] = useState(false);s
const paginationComponentOptions = {
  rowsPerPageText: "Αποτελέσματα ανά σελίδα",
  rangeSeparatorText: "από",
};

const EventsOverviewPage = () => {
  let navigate = useNavigate();

  const companyID = useSelector(
    (state) => state.persistedReducer.global.companyId
  );
  const userID = useSelector(
    (state) => state.persistedReducer.global.userID
  );

  const [updateActive, { data, isError, isLoading, error: errorU, status }] =
  useUpdateActiveMutation();

  const [deleteEvent, { data: dataD, isError: isErrorD, isLoading: isLoadingD, error: errorD, status: statusD }] =
  useDeleteEventMutation();

  useEffect(() => {
    if(status === QueryStatus.uninitialized){
      
    }else if(status === QueryStatus.fulfilled){
      navigate(0);
      toast.success("Η δραστηριότητα δημιουργήθηκε επιτυχώς", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else if (isError) {
      console.log(error.data);
      let errToastMessage = "";
      if (error.status === 400) {
        errToastMessage = `ERROR: 400 BAD REQUEST`;
      } else if (error.status === 500) {
        errToastMessage = `ERROR: 500 INTERNAL SERVER ERROR`;
      }
      if (errToastMessage !== "")
        toast.error(errToastMessage, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }
  }, [dataD, isErrorD, isLoadingD, errorD, statusD]);

  useEffect(() => {
    if(status === QueryStatus.uninitialized){
      
    }else if(status === QueryStatus.fulfilled){
      navigate(0);
      toast.success("Η δραστηριότητα δημιουργήθηκε επιτυχώς", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else if (isError) {
      console.log(error.data);
      let errToastMessage = "";
      if (error.status === 400) {
        errToastMessage = `ERROR: 400 BAD REQUEST`;
      } else if (error.status === 500) {
        errToastMessage = `ERROR: 500 INTERNAL SERVER ERROR`;
      }
      if (errToastMessage !== "")
        toast.error(errToastMessage, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }
  }, [data, isError, isLoading, errorU, status]);


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
      selector: (row) => (
        <div className="action_btn">
          <button
            name="submit"
            className="event-accept"
            type="submit"
            value="accept"
            onClick={(e) => {
              console.log("Test");
              updateActive({active: true, userID: userID, companyID: companyID})
              setActive(true);
            }}
          >
            Accept{" "}
          </button>
          /
          <button
            name="submit"
            className="event-decline"
            type="submit"
            value="decline"
            onClick={(e) => {
              console.log("Test2");
              deleteEvent({active: true, userID: userID, companyID: companyID})
              setActive(false);
            }}
          >
            Decline{" "}
          </button>
          <p id="saved"></p>
        </div>
      ),
    },
  ];
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("false");

  useEffect(() => {
    fetchData(1, perPage);
  }, [perPage]);
  const fetchData = async (page, per_page, search, active) => {
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
      <div className="EventsOverviewPage-external">
        <div className="EventsOverviewPage-top-wrapper">
          <h1>Οι δραστηριότητες μου</h1>
        </div>
        <div>
          <div className="wrap-all-search">
            <span>Aναζήτηση:</span>
            <div className="EventsOverviewPage-span-search-wrap">
              <span className="material-icons-outlined">search</span>
              <input
                className="EventsOverviewPage-search"
                type={"text"}
                placeholder="Αναζήτηση δραστηριότητας"
                onChange={handleKeyPress}
                value={search}
              ></input>
            </div>
          </div>
          <div className="EventsOverviewPage-Datatable">
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
export default EventsOverviewPage;
