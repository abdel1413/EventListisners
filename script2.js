import backfrogArray from "./component/data.js";

const findPackId = function () {
  const findId = backfrogArray.find(({ id }) => id === this.parentElement.id);

  //toggle lid open status
  findId.lidOpend === true
    ? (findId.lidOpend = false)
    : (findId.lidOpend = true);

  //toggle button text
  this.innerText === "Open Lid"
    ? (this.innerText = "Close Lid")
    : (this.innerText = "Open Lid");

  //set the lid status
  let lidStatus = this.parentElement.querySelector(".backpack__lid span");
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
     <li class='feature backpack__strap data-side="left'> Strap left length: <span> ${
       item.strapLength.left
     } </span> inches </li> 
    
     <li class='feature backpack__strap data-side='right'> Strap right length: <span> ${
       item.strapLength.right
     }</span> inches</li>
    
      <li class=' feature backpack__lid'>Lid status: <span> ${
        item.lidOpend ? "open" : "closed"
      }</span></li>
    
     <li class='feature backpack__age'> Item age: <span>${item.backpackAge()}</span></li>
     </ul>
     <button class='lid-toggle'> Open Lid </button>
     `;

  let left = back_frogArticle.querySelectorAll(".backpack__strap span");

  // for (let i of left) {
  //   console.log(i);
  // }

  const buttontoggle = back_frogArticle.querySelector(".lid-toggle");
  const lidStatus = back_frogArticle.querySelector(".backpack__lid span");

  const letstrapvalue = back_frogArticle.querySelector(".backpack__strap span");
  const rightstrapvalue = back_frogArticle.querySelector(
    ".backpack__strap span"
  );

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
    // (e) => {
    //   buttontoggle.innerText === "Open Lid"
    //     ? (buttontoggle.innerText = "Close Lid")
    //     : (buttontoggle.innerText = "Open Lid");

    //   lidStatus.innerText === "open"
    //     ? (lidStatus.innerText = "closed")
    //     : (lidStatus.innerText = "open");
    // },
    findPackId, //if it has arg, then use arrow fcn and call FindId()inside
    false
  );

  return back_frogArticle;
});

const mainContent = document.querySelector("main");
contentArray.forEach((element) => {
  mainContent.append(element);
});
