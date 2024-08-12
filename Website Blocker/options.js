function load_blocked_websites() {
    browser.storage.sync.get('websites').then((result) => {
        const websitesArray = result.websites || [];
        const websitelist=websitesArray.toString();
        const lines = websitelist.split(",");
        var textarea = document.getElementById("sites");
        for (var i = 0; i < lines.length; i++)
                textarea.value+=lines[i]+"\n";   
    }).catch((error) => {
        console.error('Error retrieving websites:', error);
    })
}

function load_blocked_features() {
    browser.storage.sync.get('features').then((result) => {
        const featuresArray = result.features || [];
        for (var i = 0; i < featuresArray.length; i++)
            if (featuresArray[i] == "1") {
                const check = document.getElementById(i + 1);
                check.checked = true;
            }

    }).catch((error) => {
        console.error('Error retrieving features:', error);
    })
}

function save_blocked_websites() {
    const textarea = document.getElementById("sites").value;
    const lines = textarea.split(/\r?\n/);
    browser.storage.sync.set({ websites: lines });
}

function save_blocked_features() {
    var values = "";
    for (var i = 1; i <= 5; i++)
        if (document.getElementById((i).toString()).checked == true)
            values += "1";
        else
            values += "0";
    browser.storage.sync.set({ features: values });
}

function save_changes() {
    browser.storage.sync.clear();
    save_blocked_websites();
    save_blocked_features();
}

document.addEventListener('DOMContentLoaded', function () {
    load_blocked_websites();
    load_blocked_features();
    const saveButton = document.getElementById('save');
    saveButton.addEventListener('click', save_changes);
});