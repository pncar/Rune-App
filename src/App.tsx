import { useState, useEffect } from 'react';
import {elderFuthark, youngerFuthark, angloSaxon, medieval, own, twigMapYounger} from "./utils/alphabets.tsx";
import "./App.css";

import BGNorse from "./assets/bgnorse1.webp";
import BGElder from "./assets/bg_elder.webp";
import BGAnglo from "./assets/bg_anglosaxon.webp";
import BGMedieval from "./assets/bg_medieval.webp";
import BGOwn from "./assets/bg_own.webp";

import iconElder from "./assets/icons/icon_elder.svg";
import iconYounger from "./assets/icons/icon_younger.svg";
import iconAnglo from "./assets/icons/icon_anglosaxon.svg";
import iconMedieval from "./assets/icons/icon_medieval.svg";
import iconOwn from "./assets/icons/icon_own.svg";

function App() {

const [word,setWord] = useState("Enter text");
const [system,setSystem] = useState(youngerFuthark);
const [activeBG,setActiveBG] = useState(BGNorse);
const [options,setOptions] = useState({
  system: "younger",
  characterCorrection: false,
  shortTwig: false,
  showTranscript: false
})

const alphabets = [
  {
    name: "Elder Futhark",
    tag: "elder",
    description: "Used for Gothic, Old High German, proto-Norse and others",
    icon: iconElder
  },
  {
    name: "Younger Futhark",
    tag: "younger",
    description: "Used for Old Norse",
    icon: iconYounger
  },
  {
    name: "Anglo-Saxon Futhorc",
    tag: "anglosaxon",
    description: "Used for Old English and Old Frisian",
    icon: iconAnglo
  },
  {
    name: "Medieval",
    tag: "medieval",
    description: "Used for Scandinavian languages during the Middle Ages",
    icon: iconMedieval
  },
  {
    name: "Amalgamation",
    tag: "own",
    description: "A variant with content from the other alphabets",
    icon: iconOwn
  }
]


const futhark = (word: string) => {
    let r = word;
    let f = word;

    //Normalize the word
    r = r.toLowerCase(); // Set to lower case

    if(options.characterCorrection){
      r = r.replaceAll("ç","s");
      r = r.replaceAll("æ","ae");
      r = r.replaceAll("ä","ae");
      r = r.replaceAll("ö","oe");
      r = r.replaceAll("ñ","nj");
      r = r.replaceAll("ð","th");
      r = r.replaceAll("ᚦ","th");
      r = r.replaceAll("Þ","th");
      r = r.replaceAll("bb","b");
      r = r.replaceAll("dd","d");
      r = r.replaceAll("ff","f");
      r = r.replaceAll("gg","g");
      r = r.replaceAll("kk","k");
      r = r.replaceAll("mm","m")
      r = r.replaceAll("nn","n");
      r = r.replaceAll("pp","p");
      r = r.replaceAll("rr","r");
      r = r.replaceAll("ss","s");
      r = r.replaceAll("tt","t");
    }

    r = r.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove diacritics
    
    for(let i=0;i<system.map.length;i++){
        r = r.replaceAll(system.map[i][0],system.map[i][1]);
    }

    f = r;
    if(options.system == "younger" && options.shortTwig){
      r = switchTwig(twigMapYounger,r);
      f = switchTwig(twigMapYounger,f,true);
    }

    for(let i=0;i<system.reverse.length;i++){
        f = f.replaceAll(system.reverse[i][0],system.reverse[i][1]);
    }

    return [r,f.toUpperCase()];
}

const handleSetWord = (val: string) => {
  setWord(val);
}

const handleSelectChange = (val: string) => {
  setOptions({...options,system:val});
}

const handleSelectByPicker = (value: string) => {
  setOptions({...options,system:value});
}

const adaptableFontSize = () => {
  if(!word){
    return "text-5xl";
  }else if(word.length < 127){
    return "text-5xl";
  }else if(word.length < 256){
    return "text-4xl";
  }else if(word.length < 512){
    return "text-3xl";
  }else if(word.length < 1024){
    return "text-2xl";
  }else if(word.length < 2048){
    return "text-xl";
  }else{
    return "text-lg";
  }
}

const switchTwig = (twigMap: string[][], word: string, reverse: boolean = false) => {
    let n = word;
    let a = 0;
    let b = 1;
    if(reverse){
      a = 1;
      b = 0;
    }
    for(let i=0;i<twigMap.length;i++){
      n = n.replaceAll(twigMap[i][a],twigMap[i][b]);
    }
    return n;
}

useEffect(()=>{
  switch(options.system){
    case "anglosaxon":
      setSystem(angloSaxon);
      setActiveBG(BGAnglo);
    break;
    case "elder":
      setSystem(elderFuthark);
      setActiveBG(BGElder);
    break;
    case "medieval":
      setSystem(medieval);
      setActiveBG(BGMedieval);
    break;
    case "own":
      setSystem(own);
      setActiveBG(BGOwn);
    break;
    case "younger":
    default:
      setSystem(youngerFuthark);
      setActiveBG(BGNorse);
    break;
  }
},[options]);

  return (
    <>
    <div className="bg-fixed bg-primary-950 text-primary-50 w-full md:min-h-screen flex items-center justify-center" style={{transition: "0.3s", backgroundImage: `url(${activeBG})`, backgroundSize: "cover"}}>
      <div className="z-10 fixed bottom-0 h-8 border-t border-b border-customBrown-600 w-full flex items-center justify-end bg-primary-900 bg-opacity-50 text-right px-8">
        <div className="flex items-center">
        <a href="https://github.com/pncar">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github inline-block" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
        </a>
        </div>
      </div>
      <div className="p-8 rounded-lg border-primary-900 text-center w-full h-full relative">
        <div className="p-2 flex items-center justify-center">
          <h1 className="font-display text-5xl font-bold bg-gradient-to-r from-customBrown-600 to-customBrown-200 bg-clip-text text-transparent">Rune Converter</h1>
        </div>
        <div className="text-primary-100 rounded-lg flex md:px-8 my-2 overflow-x-scroll md:overflow-auto w-full">
          {alphabets.map((item,key)=>
          <div key={key} onClick={()=>{handleSelectByPicker(item.tag)}} className={`py-4 flex-none md:flex-auto w-[160px] md:w-full group cursor-pointer transition-all ${options.system == item.tag ? "text-opacity-100" : "text-opacity-50"}`}>
            <img src={item.icon} className={`pointer-events-none h-24 m-auto transition-all scale-50 group-hover:scale-75 ${options.system == item.tag ? "opacity-100 scale-75 cc-shadow" : "opacity-50 scale-50"}`}/>
            <p className={`text-xs md:text-base from-customBrown-600 to-customBrown-200 bg-clip-text text-transparent font-bold ${options.system == item.tag ? "bg-gradient-to-t opacity-100 cc-shadow" : "bg-gradient-to-b opacity-50"}`}>{item.name}</p>
            <p className={`hidden md:block text-xs ${options.system == item.tag ? "opacity-100" : "opacity-50"}`}>{item.description}</p>
          </div>
          )}
        </div>
        <hr className="border-none h-[1px] bg-gradient-to-r from-transparent via-customBrown-600 to-transparent"/>
        <div className="flex w-full flex-wrap md:flex-nowrap md:h-[60vh] py-4">
          <div className="w-full md:w-1/3 border border-customBrown-600 border-opacity-50 rounded-lg h-full overflow-clip">
              <div className="p-4 bg-primary-950 relative">
                <div className="flex p-4 text-xs items-center text-primary-400">
                  <input type="checkbox" className="mr-2 inline-block accent-customBrown-600" defaultChecked={options.characterCorrection} onChange={()=>{setOptions({...options,characterCorrection: !options.characterCorrection})}}/><span>Character Correction</span>
                </div>
                <select value={options.system} onChange={(e)=>{handleSelectChange(e.target.value)}} className="bg-primary-800 bg-opacity-30 text-primary-400 p-4 w-full focus:outline-0 rounded-md">
                  <option value="elder" className="bg-primary-900 py-2">Elder Futhark</option>
                  <option value="younger" className="bg-primary-900 py-2">Younger Futhark</option>
                  <option value="anglosaxon" className="bg-primary-900 py-2">Anglo Saxon</option>
                  <option value="medieval" className="bg-primary-900 py-2">Medieval</option>
                  <option value="own" className="bg-primary-900 py-2">Combination</option>
                </select>
              </div>
              <div className="h-full overflow-hidden">
                <textarea onChange={(e)=>{handleSetWord(e.target.value)}} defaultValue={word} className="text-customBrown-600 text-lg cursor-auto h-full w-full bg-primary-950 bg-opacity-50 p-4 rounded-b-lg shadow-inner focus:outline-0"/>
              </div>
          </div>
          <div className="my-8 md:my-0 md:px-8 w-full break-all leading-loose overflow-hidden">
            <div className="p-2 px-4 text-xs flex items-center w-full rounded-md bg-primary-950 bg-opacity-50">
              <div className="flex items-center mr-4"><input type="checkbox" checked={options.showTranscript} onChange={()=>{setOptions({...options,showTranscript:!options.showTranscript})}} className="accent-customBrown-600 mr-2 inline-block"/><span className="inline-block text-primary-400">View Romanization</span></div>
              {options.system == "younger" ? <div className="flex items-center mr-4"><input type="checkbox" checked={options.shortTwig} onChange={()=>{setOptions({...options,shortTwig:!options.shortTwig})}} className="accent-customBrown-600 mr-2 inline-block"/><span className="inline-block text-primary-400">Short Twig</span></div> : <></>}
            </div>
            <div className="py-4 overflow-hidden h-full text-left">
              <p className={`${adaptableFontSize()} text-customBrown-400 font-runic overflow-scroll h-full whitespace-pre-wrap`}>{!options.showTranscript ? futhark(word)[0] : futhark(word)[1]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
