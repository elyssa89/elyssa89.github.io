// On écoute les messages du fil principal.
// Si la commande de message est "generate", on appelle `generatePrimes()`
addEventListener("message", (message) => {
    if (message.data.command === "generate") {
      generatePrimes(message.data.quota);
    }
  });
  
  // On génère des nombres premiers (très inefficacement)
  function generatePrimes(quota) {
    function isPrime(n) {
      for (let c = 2; c <= Math.sqrt(n); ++c) {
        if (n % c === 0) {
          return false;
        }
      }
      return true;
    }
  
    const primes = [];
    const maximum = 1000000;
  
    while (primes.length < quota) {
      const candidate = Math.floor(Math.random() * (maximum + 1));
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
    }
  
    // Lorsque c'est terminé, on envoie un message au fil principal
    // incluant la quantité de nombres premiers générés.
    postMessage(primes.length);
  }
  