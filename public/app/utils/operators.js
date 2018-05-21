export const partialize = (fn, ...args) => 
    fn.bind(null, ...args);

export const compose = (...fns) => value => 
<<<<<<< HEAD
    fns.reduceRight((previousValue, fn) => fn(previousValue), value)

export const pipe = (...fns) => value =>
    fns.reduce((previousValue, fn) => fn(previousValue), value)
=======
    fns.reduceRight((previousValue, fn) => fn(previousValue), value);
>>>>>>> ecaae6f08219034ff63589ca4942eb42a514a8bb
