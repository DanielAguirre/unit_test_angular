(function(){
	describe('Estamos usando una  aplicacion para crear una lista de cosas por hacer',function(){
		
		beforeEach(function(){
			module('todo');
		});
		
		it('Debe definir una lista de objetos',function(){
			expect(2+2).toEqual(4);
		});
	});
}());