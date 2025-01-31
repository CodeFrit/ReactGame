import React, {useEffect, useRef, useState } from 'react'
import Mynav from './Mynav'
import Meme from './Meme'

function Meme_site() {

    let [meme_arr,setMeme_arr] = useState([]);

    let [meme,setMeme] = useState({
    tt:"Top text",
    bt:"Bottom text",
    link:"https://picsum.photos/seed/picsum/620/320",
    mwd:620
    });

    let h1Ref = useRef(null);

    useEffect(()=>{
      setTimeout(() => {
        h1Ref.current.scrollIntoView();
      }, 500);
    },[meme.link]);

    useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes").then(res=>res.json())
    .then(resdat=>resdat.data.memes).then(e=>{
    setMeme_arr(e.map(j=>{
      return {url:j.url,wd:j.width};
    }));
    });
    },[]);

    const hanch = (event) => {
    const targ = event.currentTarget;
    const val = targ.value;
    if(targ.id == "topy"){
    setMeme({...meme,tt:val});
    }else{
    setMeme({...meme,bt:val});
    }
    }

    const rand_meme = () =>{
    let rand = Math.floor(Math.random()*meme_arr.length);
    setMeme({...meme,link:meme_arr[rand].url,mwd:meme_arr[rand].wd});
    }

    return (
    <>
     <Mynav/>
     <br />
     <div className="container text-center pb-4">
     <form action={rand_meme}>
        <div className="row row-cols-1 g-0 justify-content-center align-items-center pb-4">
          <div className="col col-4">
          <label htmlFor="topy">Top Text</label> <br />
          <input type="text" id='topy' onChange={hanch} placeholder={meme.tt} />
          </div>
          <div className="col col-4">
          <label htmlFor="boty">Bottom Text</label> <br />
          <input type="text" id='boty' onChange={hanch} placeholder={meme.bt}/>
          </div>
        </div>
        <button className="btn btn-info" style={{borderRadius:"10px",minWidth:"55%"}}>Get new Image</button>
      </form>
     </div>
     <Meme meme={meme} mref={h1Ref}/>
    </>
    )
}

export default Meme_site
