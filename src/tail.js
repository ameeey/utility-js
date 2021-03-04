const tail = (list) => {
	if(list.length >0)
	    return list.splice(1);   
	else
		return undefined;
}
module.exports = tail;
