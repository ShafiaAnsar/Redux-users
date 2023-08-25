import { connect } from "react-redux"
import { FetchUserList } from "../Redux/Action"
import { useEffect } from "react"
import { Link } from "react-router-dom";

const UserListing = (props) => {
  useEffect(()=>{
    props.loaduser()
  },[])
  const handledelete=(code)=>{
if(window.confirm("Do you want to remove?")){
  console.log('remove')
}
  }
  return (
    props.user.loading ? <div><h2>Loading...</h2></div> :
    props.user.errmessage ? <div><h2>{props.user.errmessage}</h2></div> :

    <div className="card">
      <div className="card-header">
      <Link to={'/user/add'} className="btn btn-success">Add [+]</Link>
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
          <tbody>
            {
              props.user.userlist && props.user.userlist.map(item =>
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.role}</td>
                    <td>
                      <Link to={'/user/edit'+item.id} className="btn btn-primary m-2"> Edit </Link> 
                       <button onClick={()=>{handledelete(item.id)}} className="btn btn-danger">Delete</button>
                    </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStoreToProps =(state)=>{
  return {
    user:state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      loaduser: () => dispatch(FetchUserList()),
      // removeuser:(code)=>dispatch(Removeuser(code))
  }
}
export default connect(mapStoreToProps,mapDispatchToProps) (UserListing)