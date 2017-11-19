
import * as Rx from 'rxjs';

// iterate data in an iterable

const iterableList = [1, 2, 3];

for (let ele of iterableList) {
    console.log(ele); // print 1 2 3
}

let iterableStr = 'boo';

for (let value of iterableStr) {
  console.log(value); // print b
  break; // break iteration
}

// rxjs way

Rx.Observable.create((observer) => {
    observer.next(1);
    setTimeout(() => {
        observer.next(2);
        observer.complete()
    });
}).subscribe({
    next: (val) => {
        console.log(val);
    },
});

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable