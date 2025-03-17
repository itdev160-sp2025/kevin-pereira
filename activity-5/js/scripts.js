var data = [
    {
        name: 'HTML Snippet',
        description: 'HTML Snippet is the best tool to add rich language support for HTML markup',
        author: 'Mads Kristensen',
        url: 'https://marketplace.visualstudio.com/items?itemName=MadsKristensen.HTMLSnippetPack&ssr=false#overview',
        downloads: 429348,
        stars: 4,
        price: 0,
        selector: 'p1'
    },
    {
        name: 'CSS Peek',
        description: 'CSS Peek adds support for Go To Definition and Go To Symbol in Workspace for css/scss/less classes and IDs found in HTML',
        author: 'Pranay Prakash',
        url: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek',
        downloads: 6811548,
        stars: 4,
        price: 0,
        selector: 'p2'
    }
];
    
function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads =data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function () {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function () {
        return this.stars.toLocaleString();
    };
}

    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function (id) {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package) {
        var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

        if (nameEl) nameEl.textContent = package.name;
        if (descEl) descEl.textContent = package.description;
        if (authEl) authEl.textContent = package.author;
        if (downloadEl) downloadEl.textContent = package.getFormattedDownloads();
        if (starsEl) starsEl.textContent = package.getFormattedStars();
    };

    var init = function() {
        dateEl = getEl('date');
        dateEl.textContent = getTodaysDate();

        var Snippet = new Package(data[0]);
        writePackageInfo(Snippet);

        var Peek = new Package(data[1]);
        writePackageInfo(Peek);

        for (var i = 0; i < data.length; i++) {
            var package = new Package(data[i]);
            writePackageInfo(package);
        }
    }

    init();