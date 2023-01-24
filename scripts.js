/* Simula el funcionamiento */

$(document).ready(function () {
    $('.bqb-step').each(function (index, element) {
        // element == this
        $(element).not('.active').addClass('completed');
        if ($(this).is('.active')) {
            return false;
        }
    });
});

const pasos = ['Selección de pasaje', 'Resumen de compra', 'Carga de pasajeros', 'Pago y confirmación']

function next() {
    //console.log("Next", Math.random());

        let latestActiveStep = $(".bqb-step.active").not(".completed");
        let stepNumber = +$(latestActiveStep).data("stepnum");
        if (stepNumber < pasos.length - 1) {
        var stepContentClass = '.step-content';
        console.log("step", stepNumber);
        $(latestActiveStep).addClass("completed");
        $(latestActiveStep).next().addClass("active");
        $(stepContentClass).removeClass('active');
        $(stepContentClass + '[data-stepnum= ' + stepNumber + ']').next().addClass('active');

        document.querySelector('h1').innerHTML = pasos[stepNumber + 1];
    }
}

function previous() {
    //console.log("Prev", Math.random());
    let latestDoneStep = $(".bqb-step.active.completed").last();
    let stepNumber = +$(latestDoneStep).data("stepnum");
    var stepContentClass = '.step-content';
    console.log("step", stepNumber);
    $(latestDoneStep).removeClass("completed");
    $(latestDoneStep).next().removeClass("active");
    $(stepContentClass).removeClass('active');
    $(stepContentClass + '[data-stepnum= ' + stepNumber + ']').addClass('active');
    if (stepNumber < pasos.length - 1) {
        document.querySelector('h1').innerHTML = pasos[stepNumber];
    }
}