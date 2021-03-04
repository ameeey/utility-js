const min=(list) => {
	if(list.length ==0)
		return undefined;
	else
		return Math.min(...list);
}