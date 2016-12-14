module.exports= function(sequelize, DataTypes){
	 return sequelize.define('Reclamos', {tipoReclamo: DataTypes.STRING,
		 observacion: DataTypes.STRING,
		 fecha: DataTypes.STRING									                                       	              }
                             );
}
