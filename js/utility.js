function getConvertInputValue(id) {
    const element = document.getElementById(id).value;
    const convertByNumber = parseFloat(element);
    return convertByNumber;
};


function getDivValueToNumber(id) {
    const element = document.getElementById(id).innerText;
    const convertByNumber = parseFloat(element);
    return convertByNumber;
};