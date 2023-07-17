import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useNavigate } from "react-router";
export function Bottom(props) {


  const navigate=useNavigate();
  
  function div_click(id){
    console.log(id);
    navigate("/viewArticle", { state: { id1: id } });
  }

  function del(id) {
    console.log("clicked");
    // var element = document
    if (id)
    {
      document.getElementById(id).remove();
      axios
           .post("/delposts",{id})
           .then(res=>{
            console.log(res);
           })
           .catch(err=>{
            console.log(err);
           })
    }
    
  }
  return (
    <div className="bottom" id={props.id}>
    <div className="bottom5">
    <div id="postdetails">
      <div id="name">{props.name}</div><div id="date">{props.date}</div>
      </div><hr/>
       <img src={props.url} style={{ height: "100%", width: "50%",marginLeft:"25%" }} />

    </div>
    <br/>
    <div className="bottom2" id={props.id} onClick={()=>div_click(props.id)}>
      

      <h2 id="h2" >
        {props.title}
      </h2>
      <p id="p" >
        {props.content}.......
      </p>
      <button id="del_btn" onClick={(e) => { e.stopPropagation(); del(props.id); }}>
         -
       </button>
    </div>
    
    </div>
    // <div className="bottom">
    // <div className="bottom5" id={props.id} onClick={()=>div_click(props.id)}>
    //   <div id="postdetails">

    //   <div id="name">{props.name}</div><div id="date">{props.date}</div>
    //   </div><hr/>
    //   <img src={props.url} style={{ height: "max-content", width: "100%" }} />
    // </div>
    //   <br/>
    // <div className="bottom2">
    //   <h2 id="h2" >
    //     {props.title}
    //   </h2>
    //   <p id="p" >
    //     {props.content}......
    //   </p>
    //   <button id="del_btn" onClick={(e) => { e.stopPropagation(); del(props.id); }}>
    //     -
    //   </button>
    // </div>
    
    // </div>
  );
}
// export default Bottom;
