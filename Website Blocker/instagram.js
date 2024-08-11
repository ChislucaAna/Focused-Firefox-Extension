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

remove_reels();
remove_explore_page();
remove_homepage_feed();