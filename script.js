 console.log("Laboratoire prêt !");
 const nom = "Amrane";
let age = 18;
 // nom = "palala";
 console.log(age);
const motDePasseAttendu = "12345678";
let motDePasseUtilisateur = "12345678"; // Changez cette valeur pour tester
if (motDePasseUtilisateur === motDePasseAttendu) {
    console.log("Accès autorisé. Bienvenue !");
} else if (motDePasseUtilisateur.length <8) {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
}