function load_blocked_websites() {
    var textarea = document.getElementById("sites");
    const storedListString = localStorage.getItem('blockedsites');
    const storedList = JSON.parse(storedListString);
    textarea.innerText = storedList;
}

function load_blocked_features() {
    const storedListString = localStorage.getItem('blockedfeatures');
    const storedList = JSON.parse(storedListString);
    for (var i = 0; i < storedList.length; i++)
        if (storedList[i] == "1") {
            const check = document.getElementById(i + 1);
            check.checked = true;
        }
}

async function save_changes() {
    localStorage.clear();

    const textarea = document.getElementById("sites").value;
    const lines = textarea.split(/\r?\n/);
    const blockedsites = JSON.stringify(lines);
    localStorage.setItem('blockedsites', blockedsites);

    var values="";
    for (var i = 1; i <=3; i++)
            if(document.getElementById((i).toString()).checked==true)
                values+="1";
            else
                values+="0";
    const blockedfeatures = JSON.stringify(values);
    localStorage.setItem('blockedfeatures', blockedfeatures);
}

document.addEventListener('DOMContentLoaded', function () {
    load_blocked_websites();
    load_blocked_features();

    const saveButton = document.getElementById('save');
    saveButton.addEventListener('click', save_changes);
});