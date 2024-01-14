function hitung(){
    var s = document.getElementById("s").value;
    luas = s * s;
    document.getElementById("luas").innerHTML = luas +"CM";
    var s = document.getElementById("s").value;
    kel = 4 * s;
    document.getElementById("kel").innerHTML = kel + "CM";
}