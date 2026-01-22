function showAI() {
    let btn = document.querySelector('button');
    let sub = document.querySelector('.subtitle');
    btn.innerHTML = "SCANNING...";
    
    let percent = 0;
    let timer = setInterval(() => {
        percent += 5;
        sub.innerHTML = "AI ANALYSIS: " + percent + "% COMPLETE";
        if (percent >= 100) {
            clearInterval(timer);
            sub.innerHTML = "✅ SUCCESS: NO MICROPLASTICS DETECTED";
            btn.innerHTML = "RESCAN SYSTEM";
        }
    }, 100);
}
