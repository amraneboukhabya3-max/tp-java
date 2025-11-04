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
const moi = {
    prenom: "Amrane",
    nom: "Boukhabya",
    age: 18,
    phrase:  "Je m'appelle Amrane Boukhabya.",
 
    competences: ["HTML", "CSS"]
    };
     console.log(moi);
     console.log(moi.prenom); // Affiche "Amrane"
      console.log(moi.phrase);
       moi.age = 19;
       moi.ville = "Paris";
       console.log(moi);
       const notes = [12, 15, 9, 18];
       console.log(notes[0]); // Affiche 12 console.log(notes[1]); // Affiche 15
       console.log(notes.length); // Affiche 4
       for (let i = 0; i < notes.length; i++) {
    console.log("La note à l'indice " + i + " est " + notes[i]);
}
const classe = [
    { prenom: 'Alice', age: 18 },
    { prenom: 'Bob', age: 17 }
];
;console.log(classe)
for(let i =0; 1< notes length; i++ )
    if(classe [i].age >=18){
     console.log(classe{i}.prenom)   
    }


