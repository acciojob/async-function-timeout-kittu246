//your JS code here. If required.
let text = document.getElementById("text");

let delay = document.getElementById("delay");

let display = document.getElementById("output");


async function createPromise (text,delay){

   
      return new Promise ((resolve) => {

         setTimeout(() => {
            resolve(text)
         },delay)
      })
   


}

async function displayMessage(){
   try{

      const res = await createPromise(text.innerText,delay.innerText);

      display.innerText = res ;

   }

   catch(error){
    console.log(error);
   }
}

displayMessage();