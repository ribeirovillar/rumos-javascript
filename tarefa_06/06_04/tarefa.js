function toggle() {
    let paragraph = document.getElementsByTagName('p')[0];
    if(paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
    } else {
        paragraph.style.display = 'none';
    }
}