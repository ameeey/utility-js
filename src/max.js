const max=(list) => {
	if(list.length ==0)
		return undefined;
	else
		return Math.max(...list);
}