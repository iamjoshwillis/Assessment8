function addCommas(num) {
    let formattedNum = '';
    for (let i = num.length - 1, count = 0; i >= 0; i--, count++) {
        if (count > 0 && count % 3 === 0) {
            formattedNum = ',' + formattedNum;
        }
        formattedNum = num[i] + formattedNum;
    }
    return formattedNum;
}

module.exports = addCommas;