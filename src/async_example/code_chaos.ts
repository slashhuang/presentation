const simpleAjax = (...args: any[]): any => undefined;
// demo code


const fetchUser = (callback) => {
    simpleAjax(`uidUrl`, (uid) => {
        simpleAjax(`userUrl?uid=${uid}`, (user) => {
            callback(user);
        });
    });
};

const fetchUserPromise = (callback) => {
    fetch(`uidUrl`).then((uid) => {
        fetch(`userUrl?uid=${uid}`).then((user) => {
            callback(user);
        });
    });
};

const fetchUserAsyncAwait = async (callback) => {
    let uid = await fetch(`uidUrl`);
    let user = await fetch(`userUrl?uid=${uid}`);
    callback(user);
};

