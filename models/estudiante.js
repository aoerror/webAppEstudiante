var db = require('./db_conexion.js');

var Estudiante = function(Estudiante){
    this.id = Estudiante.id;
    this.nombre = Estudiante.nombre;
    this.apellido = Estudiante.apellido;
};

Estudiante.getEstudiantes = function (result) {
db.query("Select * from estudiante", function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null)
        }
        else{
            result(null, res);
        }
    });   
};


Estudiante.getEstudianteNombre = function (nombre, result) {
    db.query("Select * from estudiante where nombre like ?",
        nombre,
        function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null)
                }
                else{
                    result(null, res);
                }        
        }
    );   
};

module.exports = Estudiante;