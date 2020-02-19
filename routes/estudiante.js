var express = require('express');
var router = express.Router();
var estudianteModel = require('../models/estudiante.js');
/* GET home pag e. */
router.get('/', function(req, res, next) {
    estudianteModel.getEstudiantes(function(err, result) {
        console.log('/');
        if (err)
            res.json(
                {"response": "Error",
                    "msg" : err
                }
            );
        
        console.log('res', result);
        res.json(
            {"response": result,
                "msg" : "200"
            }
        );
      });
});

router.get('/listar/:nombre', function(req, res, next) {
    var nombre = req.params.nombre;
    console.log ("/listar" + "   dato: " + nombre);

     estudianteModel.getEstudianteNombre(nombre,
        function(err, result) {
            if (err)
                res.json(
                    {"response": "Error",
                        "msg" : err
                    }
                );
            
            console.log('res', result);
            res.json(
                {"response": result,
                    "msg" : "200"
                }
            );
      });
});


router.post('/nuevo', function(req, res, next) {
    //res.render('index', { title: 'Nuevo' });
    res.json(
            {"response": "Ok"}
        );
});

router.put('/actualizar', function(req, res, next) {
   // res.render('index', { title: 'Actualizar' });
   var id = req.body.id;
   var nombre = req.body.nombre;
   console.log (id);
    res.json(
        {   "id": id ,
            "message": "Se ha actualizado el dato"
        }
    );
});

router.delete('/borrar', function(req, res, next) {
    //res.render('index', { title: 'Borrar' });
    var id = req.body.id;
    console.log (id);
     res.json(
         {   "id": id ,
             "message": "Se ha borrado el dato"
         }
     );
});
             //   DOCKER > Agregar una imagen con 
             // NODEJS,
            //     EXPRESS,
            //    MongoDB /Postgresql 










module.exports = router;
