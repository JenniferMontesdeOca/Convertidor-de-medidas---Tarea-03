function convertMeasure() {
    const inputMeasure = parseFloat(document.getElementById('inputMeasure').value);
    const inputUnit = document.getElementById('inputUnit').value;
    let metros, centimetros, milimetros;

    if (inputUnit === 'M') {
        metros = inputMeasure;
        centimetros = inputMeasure * 100;
        milimetros = inputMeasure * 1000;
    } else if (inputUnit === 'C') {
        metros = inputMeasure / 100;
        centimetros = inputMeasure;
        milimetros = inputMeasure * 10;
    } else if (inputUnit === 'MM') {
        metros = inputMeasure / 1000;
        centimetros = inputMeasure / 10;
        milimetros = inputMeasure;
    }

    document.getElementById('metrosValue').innerText = `${metros.toFixed(2)} m`;
    document.getElementById('centimetrosValue').innerText = `${centimetros.toFixed(2)} cm`;
    document.getElementById('milimetrosValue').innerText = `${milimetros.toFixed(2)} mm`;
}