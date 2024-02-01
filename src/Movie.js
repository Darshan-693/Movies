import nullimg from './images/download.jpg'
const Movie =({id,changePage})=>{
        if(id.show.image!==null)
        {
            var im = id.show.image.medium  
        }
        else{
            var im = nullimg
        }
        return(
            <div className="card" style={{width:"15rem"}}>
            <img src={im} className="card-img-top" />
            <div className="card-body">
              <p className="title" style={{fontWeight:"700", fontSize:"20px",textAlign:"center"}}>{id.show.name}</p>
              <p className="title" style={{fontWeight:"500",fontSize:"20px", margin:"0px"}}>Score : {id.score}</p>
              <p className="title" style={{fontWeight:"500",fontSize:"20px", margin:"0px"}}>Rating : {id.show.rating.average!==null?id.show.rating.average:"No info"}</p>
              <button href="#" className="btn btn-success" style={{position:"relative",left:"30%",marginTop:"15px"}} onClick={()=>{changePage(id);window.scrollTo(0,0);}}>Watch Now</button>
            </div>
          </div>
    );
}

export default Movie;