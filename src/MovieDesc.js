import nullimg from './images/download.jpg'
import Form from "./Form"
const MovieDesc = ({id,changePage,formFunc,form})=>
{
    
    if(id.show.image!==null)
        {
            var im = id.show.image.original
        }
        else{
            var im = nullimg
        }

        function a(id)
        {
            console.log(id)
            return `${id.show.summary}`
        }
        function main()
        {
            return(
                <div className="des">
            <h1>{id.show.name}</h1>
            <img src={im} style={{width:"300px"}}/>
            <div className="para"
      dangerouslySetInnerHTML={{__html: id.show.summary}}/> 

      <ul className="para">
        <li>Language : {id.show.language}</li>
        <li>Genres : <ul>{id.show.genres.map(x=> <li>{x}</li>)}</ul></li>
        <li >Premiered :  {id.show.premiered!==null?id.show.premiered:"No info"}</li>
        <li >Rating : {id.show.rating.average!==null?id.show.rating.average:"No info"}</li>
      </ul>

        <div className="btns para">
            <button className="btn btn-primary " onClick={()=>formFunc(1)}>Book Ticket</button>
            <button className="btn btn-dark" onClick={()=>{changePage("Main");window.scrollTo(0,0);}}>Back</button>
        </div>
        </div>
            );
        }
    if(form==0)return(
        main()
    )
    else{
        return(
            <>
                {main()}
                <Form id={id} formFunc={formFunc}/>
            </>
        )
    }
}
export default MovieDesc;