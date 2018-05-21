if (!Array.prototype.$flatMap) {
    Array.prototype.$flatMap = function(cb) {
<<<<<<< HEAD
        return this.map(cb).reduce((destArray, array) => destArray.concat(array), [])
    };
};
=======
        return this.map(cb).reduce((destArray, array) => 
            destArray.concat(array), []);
    }
}
>>>>>>> ecaae6f08219034ff63589ca4942eb42a514a8bb
