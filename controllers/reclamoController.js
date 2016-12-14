var models = require('../models/models.js');


exports.principal = function(req, res, next) {
                 models.reclamo.findAll().then( function(reclamos){
                       res.render('index',{ title:'Proyecto Final', 
                         subtitle: 'Avances en computacion',
                          reclamos: reclamos
                             });
                              });                
					 }
exports.registroReclamo = function(req, res) {
  var reclamo = {tipoReclamo:'Odeco',observacion:'',fecha:'29/11/2016'}
 		              res.render('registroReclamo', {reclamo:reclamo});
                  
		   };
exports.guardarReclamo = function(req, res) {

	console.log("ingresa a guardar");
	reclamo = models.reclamo.build (req.body.reclamo);
    //a continuacion guardamos los campos que recibimos del formulario
    reclamo.save	({fields:["tipoReclamo",
    					      "observacion",
    					      "fecha"
    					  ]
    			 }).then(function(){
    			 	console.log("ingresa a redirect");
    			 	res.render('respuestaReclamo', {mensaje:'Se registro el reclamo con exito'});
    			 });  	
console.log(reclamo);
                                              };
