function mudarTema() {
    var a = document.getElementById("style1");
    a.x = 'css/style2' == a.x ? 'css/style' : 'css/style2';
    a.href = a.x + '.css';
}