	/*Instancia*/
	
	define(['Pelicula', 'Director'], function(Pelicula, Director){
		var Titanic = new Pelicula();
		Titanic.set('title','Titanic');
		Titanic.set('year','1997');
		console.log(Titanic.get('title'));
		console.log(Titanic.get('year'));

		var jamesCameron = new Director('James Cameron');
		jamesCameron.set('quotes',['Titanic','I love the effects!','You should watch it in 3D']);
		Titanic.set('director', jamesCameron);
		console.log(Titanic.get('director').speak());
		
	/*jquery*/
	
		$(document).ready(function(){
			$('.btnQ').click(function(){
				$('.divMain').append(Titanic.get('director').speak()
				);
			});
		});
	})
	   