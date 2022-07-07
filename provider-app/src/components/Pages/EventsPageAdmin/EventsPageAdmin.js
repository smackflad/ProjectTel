import "./EventsPageAdmin.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import { Navigate, useNavigate } from "react-router-dom";
import { useUpdateActiveMutation, useDeleteEventMutation } from "../../../store/api/adminApi";
import { QueryStatus } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";

const paginationComponentOptions = {
  rowsPerPageText: "Αποτελέσματα ανά σελίδα",
  rangeSeparatorText: "από",
};
const EventsPageAdmin = () => {
  let navigate = useNavigate();

  const companyID = useSelector(
    (state) => state.persistedReducer.global.companyId
  );
  const userID = useSelector(
    (state) => state.persistedReducer.global.userId
  );

  const [updateActive, { data, isError, isLoading, error: errorU, status }] =
  useUpdateActiveMutation();

  const [deleteEvent, { data: dataD, isError: isErrorD, isLoading: isLoadingD, error: errorD, status: statusD }] =
  useDeleteEventMutation();

  useEffect(() => {
    console.log(statusD, dataD)
    if(statusD === QueryStatus.uninitialized){
      
    }else if(statusD === QueryStatus.fulfilled){
      // toast.success("Η δραστηριότητα εγκρίθηκε επιτυχώς", {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
      navigate(0);
    }else if (isErrorD) {
      console.log(errorD.data);
      let errToastMessage = "";
      if (errorD.status === 400) {
        errToastMessage = `ERROR: 400 BAD REQUEST`;
      } else if (errorD.status === 500) {
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
      // console.log(data, status)
      // toast.success("Η δραστηριότητα απορρίφθηκε επιτυχώς", {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
      navigate(0);
    }else if (isError) {
      console.log(error);
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
            onClick={(e) => {
              updateActive({active: true, eventID: row.id})
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
              deleteEvent({active: true, eventID: row.id})
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

  const companyId = useSelector(
    (state) => state.persistedReducer.global.companyId
  );

  const loggedin = useSelector(
    (state) => state.persistedReducer.global.isLoggedIn
  );

  useEffect(() => {
    if (!loggedin) {
      navigate("/");
    }
  }, [loggedin]);

  useEffect(() => {
    fetchData(0, perPage);
  }, [perPage]);
  console.log(companyId, userID);
  const fetchData = async (page, per_page, searchTxt) => {
    fetch(
      `http://localhost:3001/api/v1/companies/${companyId}/events?pageNumber=${page}&pageSize=${per_page}&employeeId=${userID}&active=false${
        searchTxt !== undefined ? "&eventName=" + searchTxt : ""
      }`
      // `https://www.mecallapi.com/api/attractions?page=${page}&per_page=${per_page}&eventName=${search}%active=${active}`
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
