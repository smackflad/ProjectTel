import "./Account.css";

const Account = () => {
  return (
    <div className="Account-external">
      <div className="Account-info">
        <h4>Πληροφορίες Λογαριασμού</h4>
        <input
          className="Account-inputs"
          type="text"
          //   value={profile.firstName}
          //   onChange={handleChange}
          disabled
        ></input>
        <input
          className="Account-inputs"
          type="text"
          //   value={profile.lastName}
          //   onChange={handleChange}
          disabled
        ></input>
        <input
          className="Account-inputs"
          type="text"
          //   value={profile.email}
          //   onChange={handleChange}
          disabled
        ></input>
        <input
          className="Account-inputs"
          type="text"
          //   value={profile.phone}
          //   onChange={handleChange}
          disabled
        ></input>
        <input
          className="Account-inputs"
          type="date"
          //   value={profile.birthDate}
          //   onChange={handleChange}
          disabled
        ></input>
      </div>
      <div className="Account-password"></div>
    </div>
  );
};

export default Account;
