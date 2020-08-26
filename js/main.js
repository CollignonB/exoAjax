let showCustomers = document.getElementById("showCustomers");
let httpRequest = new XMLHttpRequest();
let t = document.getElementsByTagName("table")[0];
let trs = t.getElementsByTagName("tr");
let th = t.getElementsByTagName("thead")[0];
let thRow = document.createElement("tr");

th.classList.add("thead-dark");
th.appendChild(thRow);


showCustomers.addEventListener("click", function() {
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                    let user = JSON.parse(httpRequest.responseText);
                    addJSONData(user);
                
            }else{
                console.log("une erreur est survenue");
    
            }
        }else{
                console.log("en attente de réponse");
        }
    }
    httpRequest.open("GET", "customers.json", true);
    httpRequest.send();
    this.disabled = true;
})

// permet d'afficher le contenu d'un fichier JSON dans un tableau html
function addJSONData(httpRequestResponse){

    for (const key in httpRequestResponse[0]) {
        let thCell = thRow.insertCell(-1);
        thCell.outerHTML = "<th>"+ key+"</th>";
        thCell.setAttribute("scope","col");
    }
     // ajoute une ligne pour chaque éléments du fichier JSON
    for (const user of httpRequestResponse) {
        trs = t.insertRow(-1);

        // ajoute une cellule pour chaque données presente dans chaque éléments
        for (const key in user) {
            let tabCell = trs.insertCell(-1); //insertCell(-1) ajoute à la fin de la ligne
            tabCell.innerText = user[key];
        }        
    }
}

// ma version du code 
    // let col = [];
    //créer un tableau col avec la liste des index (clefs) du fichier JSON 
    // for (let i = 0; i < httpRequestResponse.length; i++) {
    //     for (let key in httpRequestResponse[i]) {
    //         if (col.indexOf(key) === -1) {
    //             col.push(key);
    //         }           
    //     }
    // }
    // for (let i = 0; i< col.length; i++) {       
    //     let thCell = thRow.insertCell(-1);
    //     thCell.outerHTML = "<th>"+ col[i]+"</th>";
    //     thCell.setAttribute("scope","col");
    // }
// ajoute une ligne pour chaque éléments du fichier JSON
    // for (let i = 0; i < httpRequestResponse.length; i++) {
    
    //     trs = t.insertRow(-1);//insertRow(-1) ajoute à la fin du tableau

    //     // ajoute une cellule pour chaque données presente dans chaque éléments 
    //     for (let j = 0; j < col.length; j++) {
    //         let tabCell = trs.insertCell(-1); //insertCell(-1) ajoute à la fin de la ligne
    //         tabCell.innerText = httpRequestResponse[i][col[j]];
    //     }
    // }