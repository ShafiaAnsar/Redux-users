import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { useNavigate,Link, useParams } from "react-router-dom"
import { FetchUserObj, FunctionUpdateUser } from "../Redux/Action"
const UpdateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { code } = useParams();
  const userobj = useSelector((state) => state.user.userobj);
  const [inputValue, setInputValue] = useState({
    id: 0,
    name: '',
    email: '',
    phone: '',
    role: 'admin'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userobj = {  
      id: inputValue.id,
      name: inputValue.name,
      email: inputValue.email,
      phone: inputValue.phone,
      role: inputValue.role};
    dispatch(FunctionUpdateUser(userobj,inputValue.id));
    navigate('/user');
}
  useEffect(() => {
    dispatch(FetchUserObj(code));
  }, [dispatch, code]);

  useEffect(() => {
    if (userobj) {
      setInputValue((prevValues) => ({
        ...prevValues,
        id: userobj.id,
        name: userobj.name,
        email: userobj.email,
        phone: userobj.phone,
        role: userobj.role
      }));
    }
  }, [userobj]);
  


  const {id, name, email, phone, role } = inputValue;
  
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
              <label>Id</label>
              <input className="form-control" name="id" disabled ="disabled" value={inputValue.id || ''}></input>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Name</label>
              <input className="form-control" name="name" value={inputValue.name|| ''} onChange={handleChange}></input>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" name="email" value={inputValue.email|| ''} onChange={handleChange}></input>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Phone</label>
              <input className="form-control" name="phone"  value={inputValue.phone|| ''} onChange={handleChange}></input>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <label>Role</label>
              <select className="form-control" name="role" value={inputValue.role|| ''} onChange={handleChange}>
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

export default UpdateUser