// Author:
document.querySelector('.thumbnail').addEventListener('click', function() {
    document.querySelector('.full-image').style.display = 'block';
});
document.querySelector('.full-image').addEventListener('click', function() {
    document.querySelector('.full-image').style.display = 'none';
});
