(function() {
    document.getElementById('button-es').addEventListener('click', function() {
        goToSecondPage('es');
    });
    document.getElementById('button-en').addEventListener('click', function() {
        goToSecondPage('en');
    });
    document.getElementById('button-fr').addEventListener('click', function() {
        goToSecondPage('fr');
    });
    document.getElementById('button-it').addEventListener('click', function() {
        goToSecondPage('it');
    });
})();

function goToSecondPage(lang) {
    document.getElementById('first-page').className += " hidden-page";
    document.getElementById('second-page-' + lang).className = "page second-page";
}
