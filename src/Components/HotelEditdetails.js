import React from "react";

const HotelEditdetails = () => {
  return (
    <>
      <div className="row">
        <div className="col-xl-4 py-5">
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">
              <img
                className="img-account-profile rounded-circle mb-2"
                src="http://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              />
              <div className="small font-italic text-muted mb-4 mt-4">
                JPG or PNG no larger than 5 MB
              </div>
              <button
                className="btn mb-4 mt-2"
                type="button"
                style={{
                  backgroundColor: "#EE2B33",
                  color: "white",
                }}
              >
                Upload New Image
              </button>
            </div>
          </div>
        </div>
        <div className="col-xl-8 py-5">
          <div className="card mb-4">
            <div className="card-header">Account Details</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="md mb-1">Your Username</label>
                  <input
                    className="form-control"
                    id=""
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="md mb-1">First Name</label>
                    <input
                      className="form-control"
                      id=""
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="md mb-1">Last Name</label>
                    <input
                      className="form-control"
                      id=""
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="md mb-1">Organization Name</label>
                    <input
                      className="form-control"
                      id=""
                      type="text"
                      placeholder="Organization Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="md mb-1">Your Address</label>
                    <input
                      className="form-control"
                      id=""
                      type="text"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="md mb-1">Email Address</label>
                  <input
                    className="form-control"
                    id=""
                    type="email"
                    placeholder="Email ID"
                  />
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="md mb-1 text-uppercase">
                      Mobile Number
                    </label>
                    <input
                      className="form-control"
                      id=""
                      type="tel"
                      placeholder="Mobile number"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="md mb-1">Date Of Birthday</label>
                    <input
                      className="form-control"
                      id=""
                      type="text"
                      name="birthday"
                      placeholder="DOB"
                    />
                  </div>
                </div>
                <button
                  className="btn"
                  type="button"
                  style={{
                    backgroundColor: "#EE2B33",
                    color: "white",
                  }}
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelEditdetails;
