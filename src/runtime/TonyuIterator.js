//define(["Klass"], function (Klass) {
	//var Klass=require("../lib/Klass");
	class ArrayValueIterator {
		constructor(set) {
			this.set=set;
			this.i=0;
		}
		next () {
			if (this.i>=this.set.length) return false;
			this[0]=this.set[this.i];
			this.i++;
			return true;
		}
	}
	class ArrayKeyValueIterator {
		constructor(set) {
			this.set=set;
			this.i=0;
		}
		next() {
			if (this.i>=this.set.length) return false;
			this[0]=this.i;
			this[1]=this.set[this.i];
			this.i++;
			return true;
		}
	}
	class ObjectKeyIterator {
		constructor(set) {
			this.elems=[];
			for (var k in set) {
				this.elems.push(k);
			}
			this.i=0;
		}
		next() {
			if (this.i>=this.elems.length) return false;
			this[0]=this.elems[this.i];
			this.i++;
			return true;
		}
	}
	class ObjectKeyValueIterator{
		constructor(set) {
			this.elems=[];
			for (var k in set) {
				this.elems.push([k,set[k]]);
			}
			this.i=0;
		}
		next() {
			if (this.i>=this.elems.length) return false;
			this[0]=this.elems[this.i][0];
			this[1]=this.elems[this.i][1];
			this.i++;
			return true;
		}
	}


	function IT(set, arity) {
		if (set.tonyuIterator) {
			// TODO: the prototype of class having tonyuIterator will iterate infinitively
			return set.tonyuIterator(arity);
		} else if (set instanceof Array) {
			if (arity==1) {
				return new ArrayValueIterator(set);
			} else {
				return new ArrayKeyValueIterator(set);
			}
		} else if (set instanceof Object){
			if (arity==1) {
				return new ObjectKeyIterator(set);
			} else {
				return new ObjectKeyValueIterator(set);
			}
		} else {
			console.log(set);
			throw new Error(set+" is not iterable");
		}
	}
	module.exports=IT;
//   Tonyu.iterator=IT;
//	return IT;
//});
