define(['modules/destroyer'], function(Destroyer){

	return function() {
		this.destroyer = new Destroyer();
		this.bind = function(el,e,fn){
			el.on(e,fn);
			this.destroyer.add(el,e,fn);
		};
	};
});