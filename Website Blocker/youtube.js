async function remove_shorts() {
    if (window.location.href.includes("https://www.youtube.com")) {
        await delay(500);
        var aTags = document.getElementsByTagName("a");
        for (var i = 0; i < aTags.length; i++)
            if (aTags[i].title.includes("Shorts"))
                aTags[i].remove();   
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function remove_feed() {
    if (window.location.href == "https://www.youtube.com/") {
        window.addEventListener("scroll", function (e) {
            this.scrollTo(0, 0);
        });
    }
}

async function get_blocked_features() {
    try {
        const result = await browser.storage.sync.get('features');
        const featuresArray = result.features || [];
        if(featuresArray[3]==1) remove_shorts();
        if(featuresArray[4]==1) remove_feed();
    } catch (error) {
        console.error('Error retrieving websites:', error);
        return []; 
    }
}

get_blocked_features();