let pronoun = ['tu', 'mi'];
let adj = ['gran', 'mejor'];
let noun = ['sitio', 'rinconcito'];
let dominios_finales = ['.com', '.es', '.net', '.org'];

let get_html = document.getElementById('listaDominios');

function generateDomains() {
    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adj.length; j++) {
            for (let k = 0; k < noun.length; k++) {
                for (let l = 0; l < dominios_finales.length; l++) {
                    let domain = pronoun[i] + adj[j] + noun[k] + dominios_finales[l];

                    
                    let domainListItem = document.createElement('li');
                    domainListItem.textContent = domain;
                  
                    get_html.appendChild(domainListItem);

                    console.log(domain); 
                }
            }
        }
    }
}

generateDomains();