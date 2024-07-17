let form = document.querySelector('form')

form.addEventListener("submit",(e)=>{

    // bloquer l'envoi du formulaire
    e.preventDefault(); 


    // recuperer toutes les informations 
    let prenom = document.querySelector("#first-name").value; 
    let nom = document.querySelector("#last-name").value; 
    let commentaire = document.querySelector("#message").value; 
    

    // verifie si c'est rempli 
    if(prenom == "" || nom == "" || commentaire == ""){
        // recuperer la div error message
        let errorMessage = document.querySelector("#error-message");  

        // passer en display block 
                errorMessage.style.display = "block"
    }else{
        
         const div = document.createElement("div");         
        div.classList.add("flex","space-x-4","text-sm","text-gray-500")
        div.classList.add("flex-1","py-10","border-t","border-gray-200");
        div.classList.add("font-medium","text-gray-900");
        div.classList.add("prose","prose-sm","mt-4","max-w-none","text-gray-500");
        
              
    div.innerHTML = prenom + " " + nom + " "+ commentaire 

   
   
    console.log(div);

    }
})