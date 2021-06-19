let textarea = document.getElementById('textarea');

textarea.value = localStorage.getItem('textarea');
textarea.addEventListener('input', function () {
    localStorage.setItem('textarea', textarea.value);    
});