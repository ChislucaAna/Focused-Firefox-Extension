function load_blocked_websites() {
    var textarea = document.getElementById("sites");
    fetch('websites.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(text => {
            textarea.innerText = text;
        })
        .catch(error => {
            console.error('Error loading file:', error.message);
        });
}

function load_blocked_features() {
    fetch('features.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(text => {
            var content = text;
            for (var i = 0; i < content.length; i++)
                if (content[i] == "1") {
                    const check = document.getElementById((i + 1).toString());
                    check.checked = true;
                }
        })
        .catch(error => {
            console.error('Error loading file:', error.message);
        });
}

async function save_changes() {
}

document.addEventListener('DOMContentLoaded', function () {
    load_blocked_websites();
    load_blocked_features();
    const saveButton = document.getElementById('save');
    saveButton.addEventListener('click', save_changes);
});