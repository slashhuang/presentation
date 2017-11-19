import * as Rx from 'rxjs';
const resultPreviewDiv = document.getElementById('button-result') as HTMLElement;
const buttonInc = document.getElementById('button-inc-demo') as HTMLElement;
const buttonDec = document.getElementById('button-dec-demo') as HTMLElement;

Rx.Observable.merge(
    Rx.Observable.fromEvent(buttonInc, 'click').mapTo(1),
    Rx.Observable.fromEvent(buttonDec, 'click').mapTo(-1),
).scan((acc, current) => {
    return acc + current;
}, 0)
.subscribe({
    next: (valueEmitted) => {
        resultPreviewDiv.innerHTML = valueEmitted + '';
    },
});


