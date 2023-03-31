(function () {
    const companyNames = getComanyNames();
    console.log(companyNames);
    const array = companyNames.map(companyName => getComapnyIndicators(companyName));
    downloadCsv(array);

    function getComanyNames() {
        const rows = document.querySelectorAll('.grid-canvas > .ui-widget-content.slick-row > .slick-cell:first-child > .xs-symbol-container > .xs-symbol-name');
        return Array.from(rows).map(row => row.childNodes[0].textContent);
    }

    function getComapnyIndicators(companyName) {
    }

    function downloadCsv(array) {
        const csvContent = 'data:text/csv;charset=utf-8,' + array.map(row => row.join(',')).join('\n');
        const encodedUri = encodeURI(csvContent);
        window.open(encodedUri);
    }
})()