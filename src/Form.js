const Form=({id,formFunc})=>
{
    function confirm(event){
        event.preventDefault();
        localStorage.setItem(event.target.name.value,`${event.target.Moviename.value},${event.target.email.value},${event.target.tickets.value}`)
        formFunc(0);
        window.alert("Ticket updated in Local Storage")
    }
    return(<>
        <div className="tcontainer">
                <form onSubmit={(e)=>confirm(e)}>
                <button className="close" width="50px" style={{left:"300px"}} onClick={()=>formFunc(0)}>&times;</button>
                    <h4>Enter your Details</h4>
                    <label>Name:</label><br/>
                    <input type="text" name="name"/><br/>
                    <label>Movie:</label><br/>
                    <input type="text" name="Moviename" value={id.show.name} readOnly style={{color:"grey"}}/><br/>
                    <label>Email:</label><br/>
                    <input type="email" name="email"/><br/>
                    <label>Timings:</label><br/>
                    <input type="text" name="date" value={id.show.schedule.time} readOnly style={{color:"grey"}}/>
                    <label>Number of tickets:</label><br/>
                    <input type="number" name="tickets" /><br/>
                    <button type="submit">Confirm</button>
                </form>
            </div>
    </>);
}
export default Form;