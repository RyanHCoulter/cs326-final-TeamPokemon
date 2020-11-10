
window.onload = () => {
    document.getElementById('search').onclick = () => {
        console.log("hi");
        window.location.href = window.location.href + 'dashboard?pokemon=' + document.getElementById('enemyname').value;
    }
     
}