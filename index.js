let forEachDu = function(arra) {
    for(let i =0; i< this.length; i++) {
        return (this[i], i, this);
    }
}

Array.prototype.forEachDu = forEachDu;


const a = ['a', 'b', 'c'];

a.forEachDu((val, i , arr) => {
	console.log(val);
});