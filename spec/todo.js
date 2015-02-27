describe('Estamos usando una  aplicacion para crear una lista de cosas por hacer',function(){
	
	beforeEach(function(){
		module('todo');
	});
	
	it('Dede de definir un objeto lista',function(){
		expect(scope.list).toBeDefined();
	});

	it('La lista debe de tener almenos un elemento',function() {
		expect(scope.list.length).toBeGreaterThan(0);
	});

	it('El primer elemento de la lista debe de ser de tipo String',function() {
		expect(typeof(scope.list[0])).toBe('string');
	});

	it('El primer elemento de la lista debe de ser de tipo String',function() {
		expect(typeof(scope.list[0])).toBe('string');
	});

});
