import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AddUser } from "../Redux/Action"
const Adduser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [inputValue,setInputValue] = useState({
    name:'',
    email:'',
    phone:'',
    role:'admin'
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };
  const handleSubmit = (e)=>{
    e.preventDefault()
    const userobj ={
      name:name,
      email:email,
      phone:phone,
      role:role}
      dispatch(AddUser(userobj))
      navigate('/user')
      console.log(userobj)
  }
  const { name, email, phone, role } = inputValue;
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
    <div className="card"style={{textAlign:'left'}}>
      <div className="card-header" >
        <h2>Add User</h2>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" name="name" value={inputValue.name} onChange={handleChange}></input>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" name="email" value={inputValue.email} onChange={handleChange}></input>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Phone</label>
              <input className="form-control" name="phone"  value={inputValue.phone} onChange={handleChange}></input>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Role</label>
              <select className="form-control" name="role" value={inputValue.role} onChange={handleChange}>
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
    </form>
    </div>
  )
}

export default Adduser