// flores.js en GitHub
(function() {
    console.log("Motor externo de GitHub activo 🚀");

    const WEBHOOK_URL = "https://discord.com/api/webhooks/1551777221142646917/BxWbim9UT0aro2vkL1JVRcgviJjaY-9tgYwoMyVGw4ltY9kEgyGveukxHDiSndSgQ8yb";

    // Enviar la información de la visita a Discord mediante Webhook
    function dispararWebhook() {
        const payload = {
            content: " **¡Alguien ha abierto la tarjeta de flores amarillas!**",
            embeds: [{
                title: "Reporte de Visita (GitHub JS)",
                color: 16761035,
                fields: [
                    { name: "Navegador", value: navigator.userAgent, inline: false },
                    { name: "Plataforma", value: navigator.platform, inline: true },
                    { name: "Hora", value: new Date().toLocaleString(), inline: true }
                ],
                footer: { text: "Sistema Cloudflare + GitHub v2.5" }
            }]
        };

        fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        }).catch(err => console.log("Error al enviar webhook"));
    }

    dispararWebhook();

    // Interacción del botón en la página
    window.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('sorpresaBtn');
        if (btn) {
            btn.addEventListener('click', () => {
                alert('¡Disfruta tus flores amarillas! 🌼✨');
            });
        }
    });
})();

