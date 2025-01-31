import "./meme.css"
const Dice = (props) =>{

    return(
        <>
           <button style={{backgroundColor:`${props.isHeld ? "green" : "white"}`}}
            className="dice-text" onClick={props.hold}>
            <span style={{color:`${props.isHeld ? "white" : "black"}`}}> {props.value} </span>
            </button>
        </>
    )
}
export default Dice;