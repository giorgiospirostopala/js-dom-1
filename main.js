/* Consegna
• Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato
• accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (switch foto lampadina accesa)

BONUS
Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...
usa string.includes()  */

let luceSpenta = document.getElementById("luce-spenta");
let luceAccesa= document.getElementById("luce-accesa");
let bottone = document.getElementById("btn");

bottone.addEventListener("click", function(){

    //! [chiedi perché fosse così importante usare, in questo caso, il "===" piuttosto che un semplice "="]
    if (luceSpenta.style.display === "block") {
        luceSpenta.style.display = "none";
        luceAccesa.style.display = "block"
        bottone.textContent = "Spegni"
    } else {
        luceAccesa.style.display = "none"
        luceSpenta.style.display = "block";
        bottone.textContent = "Accendi"
    }

})
