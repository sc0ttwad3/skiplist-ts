
/* existy(x) - define the existence of something and not null or undefined */
const existy  = (x: any) => x != null;
const truthy  = (x: any) => (x !== false) && existy(x);
const logBase = (n: number, base: number): number => Math.log(n) / Math.log(base);
