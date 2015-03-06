	/*Clase Director*/

	define(function() {
		var Director = function (theName){
			this.name = theName;
			this.attributes = [];
		};

		Director.prototype = {
			constructor:Director,
			
			set:function(attr, value){
				this.attributes[attr] = value;
			},
			
			// 5.  speak () 
			speak:function(){
				return this.name+' says: '+JSON.stringify(this.attributes['quotes'])
			};
		},
	 
		return Director;
	});    