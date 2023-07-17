import axios from "axios";
import { useNavigate } from "react-router"

export default function Login(){
    const navigate =useNavigate();
    function handleClick(e){
        e.preventDefault();
        const username=document.getElementById("inp1").value;
        const password=document.getElementById("pass1").value;
        axios
            .post("/login",{
                username,
                password
            })
            .then(res1=>{
                console.log(res1);
                if(res1.status==200)
                navigate("/articles");
             })
             .catch(err=>{
                console.log(err);
             });

    }
    
    return(


        <div className="container mt-5">
  <h2>Login</h2>

  <div className="row">
    <div className="col-sm-8">
      <div className="card">
        <div className="card-body">

          <form>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" className="form-control" name="username" id="inp1"/>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" name="password" id="pass1"/>
            </div>
            <button  className="btn btn-dark" onClick={handleClick}>Login</button>
            <p id="p11"></p>
            
          </form>

        </div>
      </div>
    </div>

   

  </div>
</div>
    )
}