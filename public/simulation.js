// Simulation Features for Malicious GPT Web Demo
document.addEventListener('DOMContentLoaded', function() {
    const logOutput = document.getElementById('logOutput');

    function log(message, severity = 'info') {
        const timestamp = new Date().toISOString();
        logOutput.textContent += `[${timestamp}] ${severity.toUpperCase()}: ${message}\n`;
        logOutput.scrollTop = logOutput.scrollHeight;
    }

    window.simulateMaliciousDownload = function() {
        log("Initiating simulated malicious file download...", 'warning');
        setTimeout(() => {
            log("Malicious download detected and blocked by Cortex XSIAM.", 'alert');
        }, 1500);
    };

    window.simulatePhishingAttack = function() {
        log("Simulating phishing attack via AWS SES...", 'warning');
        setTimeout(() => {
            log("Phishing attempt detected. Prisma Cloud alerted SecOps.", 'alert');
        }, 2000);
    };

    window.simulateDataExfiltration = function() {
        log("Simulating data exfiltration from AWS S3 bucket...", 'warning');
        setTimeout(() => {
            log("Data exfiltration attempt blocked by Prisma Cloud.", 'alert');
        }, 2500);
    };
});
