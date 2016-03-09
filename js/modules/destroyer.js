define([], function(){
	return function(){
		this.killList = [];
		this.add = function(el, e, fn){
			this.killList.push({el:el,e:e,fn:fn});
		};
		this.destroy = function(){
			for(var i=0; i<this.killList.length; i++){
				var item = this.killList[i];
				var el = item.el;
				var e = item.e;
				var fn = item.fn;
				el.unbind(e, fn);
			}
			this.killList = [];
		};
	};
});