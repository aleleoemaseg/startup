	/*3.	Clase Pelicula*/

	define(["director"], function() {
		var Pelicula = function (){
			this.attributes = {};
		   
		};
		// Methods
		Pelicula.prototype = {
			constructor:Pelicula,
			
			set:function(attr, value){
				this.attributes[attr] = value;
			},

			get:function(attr){
				return this.attributes[attr];
			},
		};
	 
		return Pelicula;
	});   