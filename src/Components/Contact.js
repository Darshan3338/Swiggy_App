const Contact = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "100px" }}>
        This is Contact Page
      </h1>
      <form>
        <input type="text" placeholder="name" style={{border:"1px solid blue",padding:"10px",margin:"5px"}}/>
        <input type="text" placeholder="message"style={{border:"1px solid blue",padding:"10px",margin:"5px"}} />
        <button style={{padding:"10px",backgroundColor:"orange",color:"white",cursor:"pointer"}}>Submit</button>
      </form>
    </div>
  );
};
export default Contact;
