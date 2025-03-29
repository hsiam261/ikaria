let darkMode = localStorage.getItem('darkmode');
const themeSwitchButton = document.getElementById('darkmode-toggle');

themeSwitchButton.addEventListener("click", ()=> {
    darkMode = localStorage.getItem('darkmode');
    darkMode !== "active" ? enableDarkMode() : disableDarkMode();
});

const enableDarkMode = () => {
    darkMode = "active";
    localStorage.setItem('darkmode', darkMode);
    document.getElementById('root').classList.add('darkmode');
}

const disableDarkMode = () => {
    darkMode = null;
    localStorage.removeItem('darkmode');
    document.getElementById('root').classList.remove('darkmode');
};

if (darkMode === 'active') {
    enableDarkMode();
}
