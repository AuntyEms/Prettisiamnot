type A = keyof (T | U);
type B = keyof (X & Y);
type C = keyof T | U;
type D = keyof X & Y;
type E = (keyof T)[];
type F = ((keyof T))[];
type G = (keyof T1)["foo"];
type H = ((keyof T1))["foo"];
type I = (((keyof T1)))["foo"];
type J = ((((keyof T1))))["foo"];
