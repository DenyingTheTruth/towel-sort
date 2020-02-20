// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix) {
        matrix.forEach((element, i) => {
            if (i % 2 == 0) {
                result = [...result, ...element];
            } else {
                result = [...result, ...element.reverse()];
            }
        });
        return result;
    } else {
        return result;
    }
};
