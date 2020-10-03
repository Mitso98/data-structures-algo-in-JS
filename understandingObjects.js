// instantiation
p = { a: 1, b: null };
c = p;

// what happens when i call append
node = { a: 2, b: null };
c.b = node;
console.log(p);
c = node;

node1 = { a: 3, b: null };
c.b = node1;
console.log(p);
c = node1;

node2 = { a: 4, b: null };
c.b = node2;
console.log(p);
c = { a: 2, b: 99 };
