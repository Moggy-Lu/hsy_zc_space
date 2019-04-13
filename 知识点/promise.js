/*
promise异步函数
*/

//基本用法 -- promise结构
new Promise((reslove, reject) => {
    $.ajax({
        url: 'http://www.baidu.com',
        type: 'POST',
        success: function (res) { 
            reslove(res)
         },
         error: function (err) { 
             reject(err)
          }
    });
}).then((res) => {
    console.log('success:', res)
}, (err) => {
    console.log('fail:', err)
})

//链式promise
var promiseFun1 = new Promise((reslove, reject) => {
    $.ajax({
        url: 'http://www.baidu.com',
        type: 'POST',
        success: function (res) { 
            reslove(res)
         },
         error: function (err) { 
             reject(err)
          }
    });
})
var promiseFun2 = new Promise((reslove, reject) => {
    $.ajax({
        url: 'http://www.baidu.com',
        type: 'POST',
        success: function (res) { 
            reslove(res)
         },
         error: function (err) { 
             reject(err)
          }
    });
})

promiseFun1.then(()=>{
    console.log('promiseFun1 is succcess!')
    return promiseFun2;
}).then(() => {
    console.log('promiseFun2 is succcess!')
})
