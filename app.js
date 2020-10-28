let navbar = document.querySelector("#sidebar");

let navul = document.createElement("ul");
navul.setAttribute("class", "list-unstyled CTAs");
navbar.appendChild(navul);



const createButtoninNav = (btntext)=>{

    let navli = document.createElement("li");
    navul.appendChild(navli);
    let nava = document.createElement("a");
    nava.textContent = btntext;
    navli.appendChild(nava);

    console.log('hi');
}


createButtoninNav("Button 1");
createButtoninNav("Button 2");


