/*Btn vert pour activer la recherche */
btn.onclick = () =>{
    fetch("https://pokebuildapi.fr/api/v1/pokemon/"+champ.value)
    .then (reponse => reponse.json())
    .then (data => {
        let infoOutput = document.getElementById('infoOutput');
        let list = document.createElement('ul');
        let nameItem = document.createElement('li');
        nameItem.textContent = `${data.name}`;
        let hpItem = document.createElement('li');
        hpItem.textContent = `HP : ${data.stats.HP}`;
        let typeItem = document.createElement('li');
        typeItem.textContent = ``;

        let types = data.apiTypes;
        for (let i = 0; i < types.length; i++) {
        let type = types[i];
        let typeListItem = document.createElement('div');
        typeListItem.classList.add("type-liste");
        let typeImage = document.createElement('img');
        typeImage.classList.add("type-image");
        typeImage.src = type.image;
        typeImage.alt = type.name;
        typeListItem.appendChild(typeImage);
        typeListItem.appendChild(document.createTextNode(type.name));
        typeItem.appendChild(typeListItem);
    }



      
        list.appendChild(nameItem);
        list.appendChild(hpItem);
        list.appendChild(typeItem);
      
        infoOutput.textContent ='';
        infoOutput.appendChild(list);

        const img = document.createElement("img");
        img.src = data.sprite;
        img.classList.add("pokemon-image"); // Ajout de la classe "pokemon-image"
        output.textContent ='';
        output.appendChild(img);



        // Récupération de la balise div avec l'ID "idBox"
        var idBox = document.getElementById('idBox');

        // Création de l'élément span pour afficher la valeur de "data.pokedexId"
        var nbId = document.createElement('span');
        nbId.textContent = `${data.pokedexId}.`;

        // Ajout de l'élément "nbId" en tant qu'enfant de la balise "idBox"
        idBox.textContent ='';
        idBox.appendChild(nbId);
    })
}


