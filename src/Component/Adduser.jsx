import { Link } from "react-router-dom"
const Adduser = () => {
  return (
    <div className="card">
      <div className="card-header" style={{textAlign:'left'}}>
        <h2>Add User</h2>
      </div>
      <div className="card-body"style={{textAlign:'left'}}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" ></input>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Email</label>
              <input className="form-control"></input>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Phone</label>
              <input className="form-control"></input>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Role</label>
              <select className="form-control">
                <option value="admin">Admin</option>
                <option value="staff">Staff</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary" type="submit">Submit</button>
        <Link to={"/user"} className='btn btn-danger m-2'>Back</Link>
      </div>
    </div>
  )
}

export default Adduser