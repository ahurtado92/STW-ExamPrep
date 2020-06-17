let f1 = function (param) {
    console.log(param);
};

f1(3);



let f2 = function (a) {
    if (a >= 0){
        a=2*a
    }else{
        a=-1
    }
    return a
};

console.log(f2(3));
console.log(f2(-1));



let f3 = function (llista) {

    let llista2 = [];

    for (let key in llista) {
        llista2[key] = f2(llista[key])+23;
    }

    return llista2;
};



let l = f3([1,2,3]);
console.log(l[0]+' '+l[1]+' '+l[2]);


console.printaki = () => {
    console.log('aqui');
};

console.printaki();



let f4 = function (a,b) {
    return a+b;
};

let llistaA = [1,2,3,4];

let llistaB = llistaA.map(function (val) {
    return f4(val, 23);
});

console.log(llistaB[0]+' '+llistaB[1]+' '+llistaB[2]+' '+llistaB[3]);



function f5(a,b,callback) {
    //a és un objecte, b és una funció, i c és una funció callback
    callback(b(a));
}

f5(1, f2, function(r){console.log(r);} );



let f7 = function () {
    let count = 1;
    console.printaki2 = () =>{
        console.log('aqui '+ count);
        count++;
    }
};

f7();

console.printaki2();
console.printaki2();
console.printaki2();



const fs = require('fs');

let f6 = function (llista, callback) {
    let result = [];

    let readFiles = new Promise((resolve, reject) => {
        llista.forEach(function (element, index, array) {
            fs.readFile('./' + element, 'utf8', function (err, data) {
                if (err) {
                    throw err;
                }
                console.log('data: ' + data);
                result.push(data);

                if (index === array.length - 1) {
                    resolve();
                }
            });
        });
    });

    readFiles.then(() => {
        callback(result);
    });
};

f6(['a1.txt','a2.txt'],function (result) {
    console.log(result)
});



f7 = function (llista, callback) {
    let result = [];
    let basePath = './';

    let readFiles = new Promise((resolve, reject) => {
        llista.forEach(function (element, index, array) {
            fs.readFile(basePath + element, 'utf8', function (err, data) {
                if (err) {
                    throw err;
                }
                console.log('data: ' + data);
                result[index] = data;

                if (index === array.length - 1) {
                    resolve();
                }
            });
        });
    });

    readFiles.then(() => {
        callback(result);
    });
};

f7(['a1.txt','a2.txt'],function (result) {
    console.log(result)
});