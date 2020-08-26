let showCustomers = document.getElementById("showCustomers");
let httpRequest = new XMLHttpRequest();
let t = document.getElementsByTagName("table")[0];
let trs = t.getElementsByTagName("tr");


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
})

// permet d'afficher le contenu d'un fichier JSON dans un tableau html
function addJSONData(httpRequestResponse){
    let col = [];
    //créer un tableau col avec la liste des index (clefs) du fichier JSON 
    for (let i = 0; i < httpRequestResponse.length; i++) {
        for (let key in httpRequestResponse[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }           
        }
    }
    // ajoute une ligne pour chaque éléments du fichier JSON
    for (let i = 0; i < httpRequestResponse.length; i++) {
    
        trs = t.insertRow(-1);//insertRow(-1) ajoute à la fin du tableau

        // ajoute une cellule pour chaque données presente dans chaque éléments 
        for (let j = 0; j < col.length; j++) {
            let tabCell = trs.insertCell(-1); //insertCell(-1) ajoute à la fin de la ligne
            tabCell.innerHTML = httpRequestResponse[i][col[j]];
        }
    }
}