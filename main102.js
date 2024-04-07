//BOM browser obj model 102/110
/* we can do
open window/close/move/resize/print/runcode/fully controle the url
/save data inside the broser*/
//102

//windom.document.title="hello"

//103

/*alert(msg)->need no reponse only ok
confirm(msg)->need reponse and return a bool
prompt(ms,default msg)-> collect data*/

/*window.alert("test")
this.alert("test")
alert("test")*/
//il vont me donne la meme resultat
//alert mch hanchoufo f mawa93 car yw9f kolch hta ncliki ela ok

/*
let confirmmsg=confirm("are u sure")
console.log(confirmmsg)

if( confirmmsg===true){
    console.log("is deleted")
}else{
    console.log("item nott del")
}

let promptmsg=prompt("good day for you? lyoim li ynf3k")
console.log(promptmsg)
//va affich msg je peux y ecrire nimporte quelle truc
*/



//104
/*BOM
--setTimeout( function,timeout,additional params)
--clearTimeout  yw9f time out
/* je pux appler un fonction apres moda mo3ayana */
/**/
setTimeout(function (){
    console.log("mssage")
},3000)//mille secondes



setTimeout(saymsg,3000)
function saymsg(){
    console.log("iam msg")
}


/*
setTimeout(saymsg,3000,"imane",34)//jpeux pas le mettre dans le saymsg mch hatsna donc
//khas apres le 3000

function saymsg(user,age){
    console.log(`iam msg for ${user} ${age}`)
}*/

//--------------------------------------
/**/
let hundler=setTimeout(saymsg,3000)

function saymsg(){
    console.log(`iam msg for `)
}

console.log(hundler)//va afiche le msg apres 3s

//-----qund jai ajouter ca et clicke sur stop rapidement va affiche rien*/
let btn=document.querySelector("button")
btn.onclick=function(){
clearTimeout(hundler);//accepte hundler ->nbr ykmli saettime ta3i
//eliha roh ncree var yhkli set ta3i
}

//==========================================================
//105
/*setInterval(func,millsecondes,additional parms)
tfd lcode mirar wa tkrar apres 3s appelle 3s appelle ....c ca le diffference
clearInterval(identifier)*/


setInterval(function (){
    console.log("mssage")
},1000)//chaqie 1s affice

setInterval(saymsg,1000)
function saymsg(){
    console.log("iam msg")
}
setInterval(saymsg,1000,"imane",34)
function saymsg(user,age){
    console.log(`iam msg for ${user} ${age}`)
}

let div=document.querySelector("div")

function countdown(){
    div.innerHTML -=1
    if(div.innerHTML === "0"){
        clearInterval(hander)//comme ca  va arreter a 0
    }
}//nktb f console countdown() entrer

let hander=setInterval(countdown,1000)//bla mnktb dir 5/4/3/2/1/0/-1....







//=================================================
//106
/* location object
--href get/set [url /hash/file/mail]
--host
--hash
--protocol/
--reload()
--replace/
--assigne()*/



console.log(location)
//console.log(location.href)


location.href="https://google.com"//ne supprrime pas intri tena 
location.href="/#s2";//va go to sec2 in html

console.log(location.host)//id khas b locale server
console.log(location.hostname)//location.hostname="google.com" erreur
console.log(location.protocol)//https tab3li file: mach https: elah?
//jpeucx le modifier location.protocole="https" site ne marche pas car jao fait 
console.log(location.hash) //nktb lfo9 /#s2 donc yjibli lhash hadak f console
window.location.reload()//teml reload ll page ex-> button pour faire ca 


location.replace()//remove/supp current page from the session history and navigates to given url
location.assign()//genre hadi madirich replace tkhli google w apres elzero
//lokhra tnhi google w dir f blastha elzero thafd rla lintri ta3i


//==============================================
//107  moror lkiram
/*n --open(url [opt],window name of target attr [opt] mojerd id , win features [opt],
    history) accepete 4 choses
    --close()
    --window features 
    --width[num]
    --height[num]
   -- left[num]
   -- top[ num] */

   //search window open window features
   /**/
   setTimeout(function(){
    window.open("https://google.com","_blank"," width=400,height=400,left=200,top=100")//yhli fenetre blank ki ykounou farghin
   },2000)

   window.close


   //108
   /*  [bom] browser obj mode
   history api 
   ----properties
   ----length
   ----methods 
   -----back()
   ----forward()
   ----go(delta)=> position in history

   search [for advanced knoledge]
   --pyshState()    + replaceState()*/

   //console.log(history)

   //history.length  =>kol 3anaser mm li rani fig 
   //history.back()  => methode trj3ni safha llwaraf history
    //history.forward()   => thatni f current pagev rouh gdam
    //history.go()   => ytlb index lelm li rah f history
    //history.go(0)   => va faire update -1 ydini la wara


    //109
    /*
    --stop()
    --print()
    --focus()
    --scrollTo(x,y || option)
    --scroll(x,y || option)
    --scrollBy(x,y || option)
    */

  /**/
  // window.print()  => ouvrir une page pour 
  /**/
  let mynew=window.open("https://google.com","_blank","width=400,height=400")

  //console
  /**/ 
  mynew.focus()
  mynew.close()
  window.scrollTo(200,500)
  window.scrollby(200,500)// chghl ela 200 hadik yzidlha 200 400



  window.scrollTo({
    left:400,
    top:200,
    behavior:"smooth"
  })*/// ynzl bno3oma



  //110
  /*
  --practice => scroll to top
  --scrollX [alis => pageXOffset] badil
  --scrollX [alis => pageYOffset]badil
  */

 console.log(window.scrollX=== window.pageXOffset)//true 
let btn =document.querySelector("button")

 window.onscroll=function(){
    if(window.scrollY>= 600){
        console.log(`scrolling Y vallue is $(window.scrollY)`)
        btn.style.display='block'
    }//le brn va appear 
    else{
        btn.style.display='none'//ikhfili zrar
    }

 }

 btn.onclick=function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth", 
    })//haytl3

 }



