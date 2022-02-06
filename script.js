import backfrogArray from "./component/data.js";

const contentArray = backfrogArray.map((item) => {
  const back_frogArticle = document.createElement("article");
  back_frogArticle.classList.add("backpack");
  back_frogArticle.setAttribute("id", item.id);
  // <li class="feature backpack__date">
  //  {" "}
  //   Aquired since <span> ${item}</span>
  //  </li>;
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
     <li class='feature backpack__strap'> Strap left length: <span> ${
       item.strapLength.left
     }</span> inches</li>
     <li class='feature backpack__strap'> Strap right length: <span> ${
       item.strapLength.right
     }</span> inches</li>
      <li class=' feature backpack__lid'>Lid status: <span> ${
        item.lidOpend ? "open" : "closed"
      }</span></li>
    
     <li class='feature backpack__age'> Item age: <span>${item.backpackAge()}</span></li>
     </ul>
     <button class='lid-toggle'> Open lid </button>
     `;

  const buttontoggle = back_frogArticle.querySelector(".lid-toggle");
  const lidStatus = back_frogArticle.querySelector(".backpack__lid span");
  buttontoggle.addEventListener(
    "click",
    (e) => {
      console.log(e);
      lidStatus.innerText === "open"
        ? (lidStatus.innerText = "closed")
        : (lidStatus.innerText = "open");
    },
    false
  );

  return back_frogArticle;
});

const mainContent = document.querySelector("main");
contentArray.forEach((element) => {
  mainContent.append(element);
});
