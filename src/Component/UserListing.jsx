const UserListing = () => {
  return (
    <div className="card">
      <div className="card-header">
      <h2>UserListing</h2>
      </div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead className="table-dark "
          >
            <tr>
              <td>Code</td>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Role</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  )
}

export default UserListing