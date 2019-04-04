export function getCarriersData() {
	return [
		{ name:"South Indian", carrier:"Zomato", provider:["smith", "john", "george"] },
		{ name:"North Indian", carrier:"Food Panda", provider:["smith", "john", "george"] },
		{ name:"Italian", carrier:"Swiggy", provider:["smith", "john", "george"] },
		{ name:"Chinese", carrier:"Fresh Menu", provider:["smith", "john"] },
		{ name:"Organic", carrier:"One Table", provider:["george", "john"] },
		{ name:"Japanese", carrier:"Foody", provider:["george", "smith"] },
		{ name:"Shakes", carrier:"Keventers", provider:["smith"] }
	]  
}

export function getCheckboxData() {
	return [
        { name: 'smith', value: 'smith', label: 'Smith' },
        { name: 'john', value: 'john', label: 'John' },
        { name: 'george', value: 'george', label: 'George' }
      ]
}