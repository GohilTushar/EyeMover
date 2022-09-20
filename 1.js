window.document.addEventListener("mousemove",mM);
window.document.addEventListener("resize",mMR);
let pupils=document.getElementsByClassName("pupil");
let pA=Array.from(pupils);

let pStart=-100;
let pRange=200;

let xStart=0;
let xEnd=window.innerWidth;
let xRange=xEnd-xStart;

let yStart=0;
let yEnd=window.innerHeight;

function mMR(e){
    xEnd=window.innerWidth;
    yEnd=window.innerHeight;
    xRange=xEnd-xStart;

}

function mM(e){
    let xCurr=e.clientX-xStart;
    let xFrac=xCurr/xRange;

    let yCurr=e.clientY;
    let yFrac=yCurr/yEnd;

    let pXCurr= pStart + (xFrac*pRange);
    let pYCurr= pStart + (yFrac*pRange); 


    
    Array.from(pA).forEach(e => {
        e.style.transform=`translate(${pXCurr}px,${pYCurr}px)`;
    });
}