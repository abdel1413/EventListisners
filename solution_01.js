import backfrogArray from "./component/data.js";

//create a fucn that update the strap
const NewLength = (strapdata) => {
  //loop thru strap array
  strapdata.forEach((listelement) => {
    //get the side we want to work with using getAttribute
    let side = listelement.getAttribute("data-side");
    console.log(side);

    //create a form inside which we'll create input and btn
    const form = document.createElement("form");
    form.classList.add(`${side}length`);
    form.innerHTML = `<input  type='number' name="${side}length" placeholder=" New ${side} length "/>
      <button>Update</button>
      `;
    listelement.append(form);
  });
};

console.log(NewLength);

// Add event listener to each of the strap length forms.
//  * - Update strap length value with value submitted from form

//create a callback function with args
//Note when callback fcn has arg, we call it inside
//arrou fcn with open-close parenthesis: ()=>{callback(arg)}
const findPackId = function (newArg, buttontoggle, event) {
  console.log(newArg);
  console.log(event);
  const findId = backfrogArray.find(
    ({ id }) => id === buttontoggle.parentElement.id // parentElement = article created
  );

  //toggle lid open status
  findId.lidOpend === true
    ? (findId.lidOpend = false)
    : (findId.lidOpend = true);

  //toggle button text
  buttontoggle.innerText === "Open Lid"
    ? (buttontoggle.innerText = "Close Lid")
    : (buttontoggle.innerText = "Open Lid");

  //set the lid status
  let lidStatus = buttontoggle.parentElement.querySelector(
    ".backpack__lid span"
  );
  lidStatus.innerText === "closed"
    ? (lidStatus.innerText = "open")
    : (lidStatus.innerText = "closed");
};

const contentArray = backfrogArray.map((item) => {
  const back_frogArticle = document.createElement("article");
  back_frogArticle.classList.add("backpack");
  back_frogArticle.setAttribute("id", item.id);

  back_frogArticle.innerHTML = `
     <figure class='backpack__image'>
     <img src=${item.image} alt="" load="lazy"/>
          </figure>
         
     <h3 class='backpack__name'> Name: ${item.name}</h3>
     <ul class='backpack__features'>
     <li class=' feature backpack__volume'>Volume: <span>${
       item.volume
     }<span></li>
     <li class='feature backpack__color'> Color: <span> ${
       item.color
     }</span></li>
     <li class='feature backpack__pockets'>Number of pockets: <span> ${
       item.pocketNum
     }</span></li>
     <li class='feature backpack__strap' data-side='left'> Strap left length: <span> ${
       item.strapLength.left
     }</span> inches</li>
     <li class='feature backpack__strap' data-side='right'> Strap right length: <span> ${
       item.strapLength.right
     }</span> inches</li>
      <li class=' feature backpack__lid'>Lid status: <span> ${
        item.lidOpend ? "open" : "closed"
      }</span></li>
    
     <li class='feature backpack__age'> Item age: <span>${item.backpackAge()}</span></li>
     </ul>
     <button class='lid-toggle'> Open Lid </button>
     `;

  const buttontoggle = back_frogArticle.querySelector(".lid-toggle");
  const lidStatus = back_frogArticle.querySelector(".backpack__lid span");
  const newArg = "Im passing this arg to the call back function";

  const strapData = back_frogArticle.querySelectorAll(".backpack__strap");
  console.log(strapData);
  NewLength(strapData); //call fcn NewLength and pass strapdata

  //Remember we could use  this.innerText if it was a function
  //declaration since arrow function expression does not have this.
  //that is why we used buttontoggle.innerText

  // buttontoggle.addEventListener(

  //   "click",
  //   function(e){
  //     this.innerText === "Open Lid"
  //       ? (this.innerText = "Close Lid")
  //       : (this.innerText = "Open Lid");
  //   })

  buttontoggle.addEventListener(
    "click",
    (event) => {
      findPackId(newArg, buttontoggle, event); //pass newArg to callback
      //Since arrow fcn does go with this., we need to change
      // this.parentElement to its name which is buttontoggle and pass it as
      //seconde arg
    },
    false
  );

  return back_frogArticle;
});

const mainContent = document.querySelector("main");
contentArray.forEach((element) => {
  mainContent.append(element);
});
