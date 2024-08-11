function remove_reels() {
    if (window.location.href.includes("https://www.instagram.com")) {
        var aTags = document.getElementsByTagName("a");
        for (var i = 0; i < aTags.length; i++)
            if (aTags[i].href.includes("reels"))
                aTags[i].remove();
    }
}

function remove_explore_page() {
    if (window.location.href.includes("https://www.instagram.com")) {
        var aTags = document.getElementsByTagName("a");
        for (var i = 0; i < aTags.length; i++)
            if (aTags[i].href.includes("explore"))
                aTags[i].remove();
    }
}

function remove_homepage_feed() {
    if (window.location.href == "https://www.instagram.com/") {
        window.addEventListener("scroll", function (e) {
            this.scrollTo(0, 0);
        });
    }
}

async function get_blocked_features() {
    try {
        const result = await browser.storage.sync.get('features');
        const featuresArray = result.features || [];
        if(featuresArray[0]==1) remove_reels();
        if(featuresArray[1]==1) remove_homepage_feed();
        if(featuresArray[2]==1) remove_explore_page();
    } catch (error) {
        console.error('Error retrieving websites:', error);
        return []; 
    }
}

get_blocked_features();
