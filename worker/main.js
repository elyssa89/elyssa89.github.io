// code s'execute dans le worker principale .
// le fil   principale (thread principale
//https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous/Introducing_workers
// On crée un nouveau worker en lui injectant le code présent dans le fichier "generate.js"
const worker = new Worker("./generate.js");

// Lorsque la personne clique sur "Générer des nombres premiers", on envoie un message au worker.
// La commande portée par le message est "generate", et le message contient également "quota"
// qui indique la quantité de nombres premiers à générer.
document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});

// Lorsque le worker renvoie un message au fil principal. Grâce aux données
// du message, on met à jour la zone de sortie avec un texte, indiquant aussi
// le quantité de nombres premiers générés.
worker.addEventListener("message", (message) => {
  document.querySelector("#output").textContent =
    `Génération de ${message.data} nombres premiers terminée !`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Essayez de taper ici immédiatement après avoir appuyé sur "Générer des nombres premiers"';
  document.location.reload();
});