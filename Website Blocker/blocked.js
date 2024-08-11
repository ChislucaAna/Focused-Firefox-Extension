async function get_blocked_websites() {
    try {
        const result = await browser.storage.sync.get('websites');
        const websitesArray = result.websites || [];
        return websitesArray.toString().split(",");
    } catch (error) {
        console.error('Error retrieving websites:', error);
        return []; 
    }
}

async function logBlockedWebsites() {
    const websitelist = await get_blocked_websites();
    for (var i = 0; i < websitelist.length; i++)
        if (window.location.href.includes(websitelist[i]) && websitelist[i].length>3)
            generate();
}

logBlockedWebsites();

function generate() {
    const alertDiv = document.createElement('div');
    alertDiv.style.position = 'fixed';
    alertDiv.style.zIndex = '1000';
    alertDiv.style.left = '0';
    alertDiv.style.top = '0';
    alertDiv.style.width = '100%';
    alertDiv.style.height = '100%';
    alertDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    alertDiv.style.color = 'white';
    alertDiv.style.display = 'flex';
    alertDiv.style.justifyContent = 'center';
    alertDiv.style.alignItems = 'center';
    alertDiv.style.fontSize = '20px';
    alertDiv.style.fontFamily = 'Arial, sans-serif';
    alertDiv.style.textAlign = 'center';
    alertDiv.textContent = 'This website is currently blocked.This is a persistent alert. It will stay visible until you close this tab.';
    document.body.appendChild(alertDiv);
}
