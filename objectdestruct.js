let obj = { first: 'Jane', last: 'Doe',dob:'1/7/1992' };
let {first: f, last: l,dob: d} = obj;
     f = 'Jane'; l = 'Doe';
     console.log(f,l,d);

// {prop} is short for {prop: prop}
let {first, last} = obj;
     first = 'Jane'; last = 'Doe',dob = '1/7/1992';
     console.log(first,last,dob);

