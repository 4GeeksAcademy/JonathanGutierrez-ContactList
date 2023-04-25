import React from "react";

const AddContact = () => {
  return (
    <form>
      <div className="row mb-3">
        <div className="col-6">
          <label htmlFor="formGroupExampleInput" className="form-label">
            <h4>Name</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Please input your name"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-6">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            <h4>Email</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Please input your email"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-6">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            <h4>Phone</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Please input your telephone number  "
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-6">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            <h4>Address</h4>
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Please input your address  "
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default AddContact;
