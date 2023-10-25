//your JS code here. If required.
let text = document.getElementById("text");

let delay = document.getElementById("delay");

let display = document.getElementById("output");

let btn = document.getElementById("btn");

btn.addEventListener('click', displayMessage);



// async function createPromise (text,delay){

   
//       return new Promise ((resolve) => {

//          setTimeout(() => {
//             resolve(text)
//          },parseInt(delay))
//       })
   


// }



async function displayMessage(){
   try{

      display.innerText = await new Promise((resolve,reject) =>{

		  setTimeout(() =>{
			  resolve(text.value)
		  },parseInt(delay.value))
	  })

       

   }

   catch(error){
    console.log(error);
   }
}

displayMessage();