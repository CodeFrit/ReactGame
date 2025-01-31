import {useEffect, useState } from 'react';
import Dice from './Dice';
function Tenzies(){

    import ("./game.css");

    let ids = "abcdefghij".split("");

    let [dice_arr,setDice] = useState(genDice);

    let [bt,setBt] = useState("Roll");

    let[rl,setRl] = useState(0);

    let gameWon = dice_arr.every(d=>d.isHeld) && dice_arr.every(d=>d.value==dice_arr[0].value);

    useEffect(()=>{
        if(gameWon){
        console.log("You win!");
        setBt("New game");
        }
    },[gameWon]);

    function hold(id){
        setDice(dice_arr.map(e=>{
        return e.id == id ? {...e,isHeld:!e.isHeld} : e;
        }))
    }

    function genDice(){
        return (new Array(10).fill(0)).map((e,i)=>{
        let ran_val = Math.floor(Math.random()*6)+1;
        return {key:ids[i],id:ids[i],value:ran_val,isHeld:false};
        });
    }

    let dice_ren = dice_arr.map(e=><Dice key={e.key} id={e.id} value={e.value} isHeld={e.isHeld} hold={()=>{hold(e.id)}} />)

    const rollDice = () => {
        if(!gameWon){
        setDice(dice_arr.map(e=>{
            return e.isHeld ? e : {...e,value:Math.floor(Math.random()*6)+1};
        }));
        setRl(rl+1);
        }else{
        setRl(0);
        setDice(genDice);
        setBt("Roll");
        }
    }

    return(
        <>
        <a className="tx3 fs-5 link-info" href="/memes">Go to meme generator</a>
        <p className="tx" style={{visibility:`${gameWon ? "visible" : "hidden"}`}}>You win!</p>
        <main>
        <div className="dice-container"> 
            {dice_ren}
        </div>
        </main>
        <button className="roll-button" onClick={rollDice}>{bt}</button>
        <p className="tx2">Rolls: {rl}</p>
        </>
    )
}
export default Tenzies