
function Cargaelementos(G,X){
 
    var bar = document.getElementById(X);

    var animate = setInterval(function () {

        let W = G;


        if (bar.value <= W) {
            bar.value += 1;
        }else{
         stop;
        }

    }, 10);
}
