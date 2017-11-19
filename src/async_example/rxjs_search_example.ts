import * as Rx from 'rxjs';
import { Observable } from 'rxjs/Observable';
const inputElement = document.getElementById('search-input') as HTMLElement;
const searchPreview = document.getElementById('search-preview') as HTMLElement;


const fetch = (keyWord: string): Promise<string> => {
    let isLater: boolean = keyWord.length%2 === 0;
    if (isLater) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(keyWord);
            }, 2000);
        });
    } else {
        return Promise.resolve(keyWord);
    }
};

Rx.Observable.fromEvent(inputElement, 'input')
    .debounceTime(4000)
    .map((event: Event) => {
        return (<HTMLInputElement>event.target).value;
    })
    .switchMap((keyWord: string) => {
        return Observable.fromPromise(fetch(keyWord));
    })
    .subscribe({
        next: (result) => {
            searchPreview.innerHTML = result;
        },
    });

