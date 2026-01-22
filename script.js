// Real-time Clock
setInterval(() => {
    document.getElementById('clock').innerText = new Date().toLocaleTimeString();
}, 1000);

function runDiagnostic() {
    let output = document.getElementById('output');
    output.innerHTML = "> ACCESSING SATELLITE...<br>";
    
    let messages = [
        "> CONNECTING TO REEF_NODE_04...",
        "> ANALYZING BIO-THERMALS...",
        "> DETECTING ANOMALIES...",
        "> RESULT: NO PLASTICS FOUND",
        "> SYSTEM SECURE."
    ];

    messages.forEach((msg, i) => {
        setTimeout(() => {
            output.innerHTML += msg + "<br>";
        }, i * 1000);
    });
}
