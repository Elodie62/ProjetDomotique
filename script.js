/*Ouverture et fermeture du menu burger */
const backdropElement= document.querySelector(".backdrop");/*Selectionne la div avec la classe backdrop*/ 
const menuButton= document.querySelector(".btn");
/*Selectionne le bouton avec la classe btn*/ 

/*Quand on va cliquer sur le bouton, la classe "active" sera ajouté ou supprimé à la div backdrop selon l'état actuel*/ 
menuButton.addEventListener("click",function(){
  backdropElement.classList.toggle("active");
});



/*Voir les valeurs de l'input range température*/
const inputTemperature= document.querySelector(".temp"); /*Selectionne l'input range class temp*/ 

inputTemperature.addEventListener("input", function(event)/*fonction qui est appelé a chaque fois qu'il y a un evenement sur l'imput */ 
{
  const number = document.querySelector(".number"); /*selection de l'output class number*/ 

  number.innerHTML = inputTemperature.value; /*ajoute la valeur recupéré de l'input dans l'output*/ 

  
});

