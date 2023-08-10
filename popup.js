const dark = document.getElementById('dark');
const defaultColor = document.getElementById('default');

dark.addEventListener('click', styleDark);
defaultColor.addEventListener('click', resetColors);

const normal = document.body.style.backgroundColor;


function resetColors(){
    document.body.style.backgroundColor = normal;
}