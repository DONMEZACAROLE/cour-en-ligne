function readFormData() {
    const email = document.getElementById("email").value;
    //si l'email est vide alors afficher l'erreur
    const longueur = email.trim().length;
    if (longueur === 0) {
        document.getElementById("email-error").style.display = "block";
    } else {
        document.getElementById("email-error").style.display = "none";
    }

    //recherher@.s'il n'ya pas@ afficher l'erreur
    if (email.indexOf("@") === -1) {
        document.getElementById("email-error").style.display = "block";
    } else {
        document.getElementById("email-error").style.display = "none";
    }
    //rechercher.s'il n'ya pas.afficher l'erreur
    if (email.indexOf(".") === -1) {
        document.getElementById("email-error").style.display = "block";
    } else {
        document.getElementById("email-error").style.display = "none";
    }
}
function validateField(fieldId) {
    //lecture de la valeur
    const value = document.getElementById(fieldId).value;
    //test
    if (isNaN(value)) {
        //si vrai
        document.getElementById("telephone-error").style.display = "block";
    } else {
        //si faux
        document.getElementById("telephone-error").style.display = "none";
    }
}

