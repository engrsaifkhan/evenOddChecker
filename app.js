function evenOdd(){
  let arr=["Even", "Odd"];
let number= document.querySelector("#number").value;
number= Number(number)
let result= arr[number%2];
document.querySelector("#result").innerHTML= `Your Number is ${result}`;
}
