// callback 

function call (callback){
    setTimeout(() => {
        console.log("js")
        callback()
    }, 5000);
  
}
function back (callback){
    setTimeout(() => {
        console.log("javascript")
    },2000);
    
}
// call(back);

// callback hell 

function dog (callback){
    setTimeout(() => {
        console.log("walk the dog")
        callback()
    }, 5000);
}
function clean (callback){
    setTimeout(() => {
        console.log("clean the kitchan")
        callback()
    }, 2000);
}
function trash (callback){
    setTimeout(() => {
        console.log("put the trash out")
        callback()
    }, 1000);
}
function work (callback){
    setTimeout(() => {
        console.log("don all works")
        callback()
    },600);
}
dog(()=>{
    clean(()=>{
        trash(()=>{
            work(()=>{})
        })
    })
})