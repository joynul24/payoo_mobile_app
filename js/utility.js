function getConvertInputValue(id) {
    const element = document.getElementById(id).value;
    const convertByNumber = parseFloat(element);
    return convertByNumber;
};