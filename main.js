function populateJobsArray(listaJoburi, listaJobOpCard, Class) {
  for (let i = 0; i < listaJoburi.length; i++) {
    listaJobOpCard.push(new Class(listaJoburi[i]));
    console.log(listaJobOpCard);
  }
  console.log(listaJobOpCard);
}
populateJobsArray(listaJoburi, jobOpCards, JobOpCard);

populateJobsArray(listaJoburiJos, jobOpCardsJos, JobOpCard);

function populateCards(list, mainTitle, mainDesc, cardType, clickArray) {
  let container = document.getElementById("container");
  let wrapper = document.createElement("div");
  let background = document.createElement("div");
  let div = document.createElement("div");

  background.id = "section" + cardType;
  wrapper.id = "wrapper";
  container.appendChild(background);
  background.appendChild(wrapper);

  wrapper.innerHTML +=
    "<div id=wrapperTitle" +
    cardType +
    ">" +
    mainTitle +
    "</div>" +
    "<div id=wrapperDescription" +
    cardType +
    ">" +
    mainDesc +
    "</div>";

  for (let i = 0; i < list.length; i++) {
    div.innerHTML += `<div class="card" >` + list[i].string() + `</div>`;
    div.style.display = "grid";
    div.style.gridTemplateColumns = "repeat(auto-fit, 375px)";
    div.style.marginTop = "20px";
    wrapper.appendChild(div);
    div.style.justifyItems = "center";
  }

  if (cardType === 1) {
    for (let i = 0; i < list.length; i++) {
      let jobTitle = document.querySelector(".jobTitle");
      let jobDesc = document.querySelector(".jobDesc");
      let card = document.querySelector(".card");
      let link = document.querySelector(".jobLink");
      card.setAttribute("class", "card" + cardType);
      jobTitle.setAttribute("class", "jobTitle" + cardType);
      jobDesc.setAttribute("class", "jobDesc" + cardType);
      link.setAttribute("class", "jobLink" + cardType);
      card.setAttribute("onclick", clickArray[i]);
    }
  } else {
    for (let i = 0; i < list.length; i++) {
      let jobTitle = document.querySelector(".jobTitle");
      let jobDesc = document.querySelector(".jobDesc");
      let card = document.querySelector(".card");
      let link = document.querySelector(".jobLink");
      card.setAttribute("class", "card" + cardType);
      jobTitle.setAttribute("class", "jobTitle" + cardType);
      jobDesc.setAttribute("class", "jobDesc" + cardType);
      link.setAttribute("class", "jobLink" + cardType);
      background.style.background =
        "url(https://home.ametras.ro/wp-content/uploads/2022/02/ametras-gradient.png)";
    }
  }
}

function addData(
  titlesList,
  locationList,
  expList,
  projectDescription,
  introductionList,
  reqTitles,
  reqList,
  additionalTitle,
  additionalList,
  weOfferTitle,
  weOfferList
) {
  let jobPages1 = [];
  for (let i = 0; i < 6; i++) {
    let newJobPage = new jobPage(
      titlesList[i],
      locationList[i],
      expList[i],
      projectDescription[i],
      introductionList[i],
      reqTitles[i],
      reqList[i],
      additionalTitle[i],
      additionalList[i],
      weOfferTitle[i],
      weOfferList[i]
    );
    jobPages1.push(newJobPage);
    // console.log(newJobPage)
    // console.log(jobPages1)
  }
  return jobPages1;
}
let jobPageList = addData(
  jobTitles,
  jobLocation,
  jobReq,
  projectDescription,
  introductionList,
  jobReqTitle,
  jobReqList,
  jobAdditionalTitle,
  jobAdditional,
  jobWeOfferTitles,
  jobWeOffer
);

console.log(jobPageList);

console.log(jobPageList);

function showJobDetails(newJobPage) {
  let container = document.getElementById("container");
  let body = document.getElementById("body")
  body.innerHTML = ""
  body.appendChild(container)
  container.innerHTML = "";
  let content = document.createElement("div");
  content.setAttribute("class", "content");

  let mainTitle = document.createElement("p");
  mainTitle.setAttribute("class", "main-title");
  mainTitle.innerHTML = newJobPage.jobTitles;
  let applyButton = document.createElement("button");
  applyButton.innerHTML = "APPLY NOW";
  applyButton.setAttribute("class", "apply-button");

  let jobTitle = document.createElement("p");
  jobTitle.setAttribute("class", "job-title");
  jobTitle.innerHTML = newJobPage.jobTitles;
  let location = document.createElement("p");
  location.setAttribute("class", "location");
  location.innerHTML = newJobPage.jobLocation;
  let experience = document.createElement("p");
  experience.setAttribute("class", "job-req");
  experience.innerHTML = newJobPage.jobExperience;

  let introduction = document.createElement("div");
  introduction.setAttribute("class", "introduction");
  let ametras = document.createElement("strong");
  ametras.innerHTML = "Ametras Service ";
  let compIntrod = document.createElement("span");
  compIntrod.innerHTML = newJobPage.compIntroduction;

  let projectDescription = document.createElement("div");
  let projectDescriptionText = document.createElement("span");
  let u = document.createElement("u");
  u.innerHTML = "Project description:";
  projectDescriptionText.innerHTML = newJobPage.projectDescription;
  projectDescription.appendChild(u);
  if (newJobPage.projectDescription === "") {
    projectDescription.removeChild(u);
  }
  projectDescription.appendChild(projectDescriptionText);

  let reqTitle = document.createElement("div");
  reqTitle.innerHTML = "<strong>" + newJobPage.requireTitle + "</strong>";
  let ul = document.createElement("ul");
  newJobPage.requireList.forEach(
    (element) => (ul.innerHTML += "<li>" + element + "</li>")
  );

  let additionalTitle = document.createElement("div");
  additionalTitle.innerHTML =
    "<strong>" + newJobPage.additionalTitle + "</strong>";
  let additionalList = document.createElement("div");
  let additionalUl = document.createElement("ul");
  newJobPage.additionalList.forEach(
    (element) => (additionalUl.innerHTML += "<li>" + element + "</li>")
  );
  additionalList.appendChild(additionalUl);

  let offerTitle = document.createElement("div");
  offerTitle.innerHTML = "<strong>" + newJobPage.jobOfferTitle + "</strong>";
  let offerList = document.createElement("div");
  let offerUl = document.createElement("ul");
  newJobPage.jobOfferList.forEach(
    (element) => (offerUl.innerHTML += "<li>" + element + "</li>")
  );
  offerList.appendChild(offerUl);
  let apply = document.createElement("h4");
  apply.innerHTML = "Apply Now!";

  let br = document.createElement("br");

  reqTitle.style.marginTop = "40px";
  additionalTitle.style.marginTop = "40px";
  additionalList.style.marginTop = "40px";
  offerTitle.style.marginTop = "40px";
  offerList.style.marginTop = "40px";

  let form = document.createElement("form");
  let nameLabel = document.createElement("label");
  let mailLabel = document.createElement("label");
  let subjectLabel = document.createElement("label");
  let socialLabel = document.createElement("label");
  let nameInput = document.createElement("input");
  let mailInput = document.createElement("input");
  let subjectInput = document.createElement("input");
  let socialInput = document.createElement("input");

  form.setAttribute("action", "");

  nameLabel.setAttribute("for", "name");
  nameLabel.innerHTML = "Your name" + "<br />";
  nameLabel.appendChild(nameInput);
  nameLabel.appendChild(document.createElement("br"));

  mailLabel.setAttribute("for", "email");
  mailLabel.innerHTML = "Your email" + "<br />";
  mailLabel.appendChild(mailInput);
  mailLabel.appendChild(document.createElement("br"));

  subjectLabel.setAttribute("for", "subject");
  subjectLabel.innerHTML = "Subject" + "<br />";
  subjectLabel.appendChild(subjectInput);
  subjectLabel.appendChild(document.createElement("br"));

  socialLabel.setAttribute("for", "social");
  socialLabel.innerHTML = "Your LinkedIn Account link" + "<br />";
  socialLabel.appendChild(socialInput);
  socialLabel.appendChild(document.createElement("br"));

  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("id", "name");

  mailInput.setAttribute("type", "text");
  mailInput.setAttribute("name", "email");
  mailInput.setAttribute("id", "email");

  subjectInput.setAttribute("type", "text");
  subjectInput.setAttribute("name", "subject");
  subjectInput.setAttribute("id", "subject");

  socialInput.setAttribute("type", "text");
  socialInput.setAttribute("name", "social");
  socialInput.setAttribute("id", "social");

  let submitButton = document.createElement("button");
  submitButton.innerHTML = "SUBMIT";
  submitButton.style.marginBottom = "50px";
  submitButton.setAttribute("class", "submit-button");

  let backButton = document.createElement("button");
  backButton.innerHTML = "BACK";
  backButton.setAttribute("class", "submit-button");
  backButton.style.cursor = "pointer";
  backButton.onclick = goBack;

  container.appendChild(content);
  content.appendChild(mainTitle);
  content.appendChild(location);
  content.appendChild(jobTitle);
  content.appendChild(experience);
  content.appendChild(applyButton);
  content.appendChild(introduction);
  content.appendChild(ametras);
  content.appendChild(compIntrod);
  content.appendChild(projectDescription);
  content.appendChild(reqTitle);
  content.appendChild(ul);
  content.appendChild(additionalTitle);
  content.appendChild(additionalList);
  content.appendChild(offerTitle);
  content.appendChild(offerList);
  content.appendChild(apply);
  content.appendChild(form);
  content.appendChild(submitButton);

  form.appendChild(nameLabel);
  form.appendChild(br);
  form.appendChild(mailLabel);
  form.appendChild(br);
  form.appendChild(subjectLabel);
  form.appendChild(socialLabel);
  content.appendChild(backButton);
  content.appendChild(br);


}

function goBack() {
  let container = document.getElementById("container");
  container.innerHTML = "";
  showCarrerPage();

}

function showMainTitle(mainTitle, subTitle, footerTitle) {
  let header = document.createElement("div");
  header.setAttribute("class", "header");
  let body = document.getElementById("body");

  header.innerHTML = '<div class="mainTitle">' + mainTitle + "</div>";
  header.innerHTML += '<div class="subTitle">' + subTitle + "</div>";
  body.innerHTML +=
    '<div class="footer">' +
    '<div class="footer-title">' +
    footerTitle +
    "</div>" +
    '<button class="footer-button">' +
    "START TODAY" +
    "</button>" +
    "</div>";
  body.insertBefore(header, body.firstChild);
}

function showCarrerPage() {
  showMainTitle(mainPageTitle, mainPageSubtitle, footerTitle);

  populateCards(
    jobOpCards,
    `Carrer opportunities`,
    `We are always looking for ways to expand our collective expertise. Here are some of the opportunities available in our team.`,
    1,
    onclickArray
  );

  populateCards(
    jobOpCardsJos,
    `A career that keeps on giving`,
    ``,
    2,
    jobPageList
  );
  createSlider(slides)
}

showCarrerPage();




function createSlider (slides) {
  let body = document.getElementById("body");
  let h4 = document.createElement("h4")
  h4.id = "stories"
  h4.innerHTML = "Our Stories"
  body.appendChild(h4)
  //let slider = document.getElementById("inner-slider")
  let slider = document.createElement("div")
  let innerSlider = document.createElement("div")
  slider.setAttribute("class", "slider")
  innerSlider.id = "inner-slider"
  slider.appendChild(innerSlider)
  body.appendChild(slider)
  let footer = document.querySelector(".footer")

  //let container = document.querySelector(".slider")

  body.insertBefore(slider, footer)
  body.insertBefore(h4, slider)
  // slider.innerHTML += '<button class="previous" onclick="plusSlides(-1)">' + 'PREVIOUS QUOTE'+ '</button>'
  // slider.innerHTML += '<button class="next" onclick="plusSlides(1)">' + 'NEXT QUOTE'+ '</button>'
  for (let i = 0; i < slides.length; i++) {
    innerSlider.innerHTML += '<div class="slide">' + '<q class="slide-text">' +slides[i].quote + '</q>'+ '<p class="slide-name">' + slides[i].name + '</p>' + '<p class="slide-company">' + slides[i].company + '</p>' + '</div>'
  }
  let slide = document.querySelector(".slide")
  let pressed = false;
  let startx;
  let x;

  slider.addEventListener('mousedown', (e) => {
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = "grabbing"
  })

  slider.addEventListener('mouseenter', () => {
    slider.style.cursor = "grab";
  })

  slider.addEventListener('mouseup', ()=> {
    slider.style.cursor = "grab"
  })

  window.addEventListener('mouseup', () => {
    pressed = false;
  })

  slider.addEventListener('mousemove', (e) => {
    if(!pressed) return
    e.preventDefault()

    x = e.offsetX
    innerSlider.style.left = `${x - startx}px`;
    slide.style.display = "block";
  })

}
