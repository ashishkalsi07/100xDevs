let counter = 0
let setid = setInterval(()=>{
    console.log("This is displayed after 1 second")
    counter += 1;
    if(counter === 5){
        clearInterval(setid)
    }
},1000)
