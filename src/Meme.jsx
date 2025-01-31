import "./meme.css"
const Meme = (props) =>{
    //https://picsum.photos/seed/picsum/200/300

    let meme = props.meme;

    return(
        <div className="container text-center py-1" style={{backgroundImage:`url(${meme.link})`,
        backgroundRepeat:"no-repeat",
        maxWidth:`${meme.mwd}px`}}>
            <h1>{meme.tt}</h1>
            <img style={{visibility:"hidden"}} src={meme.link}/>
            <h1 ref={props.mref} style={{marginTop:"-114px"}}>{meme.bt}</h1>
        </div>
    )
}
export default Meme