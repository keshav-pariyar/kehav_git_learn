// let currentResult = 0;
// currentResult = (currentResult + 10) * 3;
// let calculationDiscription = '(0+10)*3'
// outputResult(currentResult, calculationDiscription)
// let title = document.getElementById('heading')
// console.log(title.innerText)
// title.innerText="today is friday"
    let rediv=document.getElementById('red')
    let bluediv=document.getElementById('blue')
    let greendiv=document.getElementById('green')
    const square = document.querySelectorAll('.colorsquare')
    // console.log(square)
    // rediv.onclick=()=>{

    //     console.log('clicked-red')
    // }
    // rediv.onclick = function() {
    //     return console.log('clicked red')
    // }
    // bluediv.onclick=()=>{
    //     console.log('clicked-blue')
    //  }
    // greendiv.onclick =()=>{
    //     console.log('clicked green')
    // }
    const clickcount={'red':0,'blue':0,'green':0}
     square.forEach(  sqr => {
        sqr.onclick = () => {
            clickcount[sqr.value]+=1
            sqr.innerText=clickcount[sqr.value]}
        
        }
    )
    function clear(){
        square.forEach(sqr=>sqr.innerText="")
       }
    const reset = document.getElementById('clear-btn')
    reset.onclick=()=>clear()
   