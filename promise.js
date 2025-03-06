// promise 
// syntax 
// return  new promise ((resolve,reject)=>{})


function shop (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const go = true
            if(go){
                resolve("going to shop")
            }
            else {
                reject("not going to the shop")
            }
        },5000);
    })
}
function buy (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const the = true
            if(the){
                resolve("buy the product")
            }
            else {
                reject("did not buy the product")
            }
        },3000);
    })
}
function change (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const back = false
            if (back){
                resolve("get the chenges back")
            }
            else{
                reject("did not get the changes back")
            }
        },1000);
    })
}
function home (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const to =true 
            if (to){
                resolve("back to home")
            }
            else {
                reject("going to playgroud")
            }
        },500);
    })
}

// shop()
// .catch(val => {console.log(val); return buy()})
// .then(val => {console.log(val); return change()})
// .then(val => {console.log(val); return home()})
// .then(val => {console.log(val);console.log("work don");})

async function task() {
    try {
        const a = await shop()
    console.log(a);
    const b = await buy ()
    console.log(b);
    const c = await change()
    console.log(c);
    const d = await home()
    console.log(d);
    } catch (error) {
        console.log(error);   
    }
}
task()