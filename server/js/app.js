baseDatos = [];

function Alumno(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

function imprimir(){
    var nombreCapturar = document.getElementById("nombre").value;
    var edadCapturar = document.getElementById("edad").value;

    var nuevoAlumno = new Alumno(nombreCapturar, edadCapturar);
    console.log(nuevoAlumno);
    agregar(nuevoAlumno);

    function agregar(nuevoAlumno) {
        baseDatos.push(nuevoAlumno);
        console.log(baseDatos);
        document.getElementById("tabla").innerHTML += '<tbody><td>' + nuevoAlumno.nombre + '</td><td>' + nuevoAlumno.edad + '</td></tbody>';
    }
}

function matricular(){
    
}

// var alumno1 = new Alumno('Alfonso', 23, 'sdfasdñlkfjañlbdf');
// console.log(alumno1);