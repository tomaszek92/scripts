(function () {
    const rows = document.querySelectorAll('.grid-canvas > .ui-widget-content.slick-group');
    
    const array = Array.from(rows).map(row => {
        const name =  row.children[0].children[1].children[0].childNodes[0].textContent;
        
        const valueText = row.children[2].innerText.replaceAll(' ', '');
        const value = parseFloat(valueText);

        return [name, value];
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + array.map(row => row.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  })()
  