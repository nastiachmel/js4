//1
// Написать функцию, которая принимает 2 числа и возвращает -1,
//  если первое меньше, чем второе; 
// 1 – если первое больше, чем второе; и 0 – если числа равны.

num = (num1, num2) =>{
if(num1 > num2){
  return 1;
}else if (num1<num2) {
  return (-1);
}
if(num1==num2){
 return 0;
}
}
// console.log(num(9,10));

//2
// Написать функцию, которая вычисляет
//  факториал переданного ей числа.

factorial= (num) =>{
  let result =1;
  let i = 1;
while(i<=num){
  result *= i;
  i++;
}
return result;
}
// console.log(factorial(4));

//3
// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. 
// Например: цифры 1, 4, 9 превратятся в число 149.

oneNumber = (num1, num2, num3) =>{
  let a= Number(`${num1}${num2}${num3}`);
  console.log(a);
}
// oneNumber(1,5,7);

//4
// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площад
//  функцию передали 1 параметр, то она вычисляет площадь квадрата.

square = (a,b=0) => {
if(b==0){
return a*a;
} else {
  return a*b;
}
}
// console.log(square(5,3));

 //5
//example 6 28 496

// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число 
// – это число, равное сумме всех своих собственных делителей.

isPerfectNumber = (num=0) => {
let i = 1;
let a= 0;
let result= 0;
while( i< num){
  if(!(num % i)){
    a =i;
    result = result + a;
  }
  i++;
}
if(num==result){
  return 'yes';
}else {return 'no';}
}
// console.log(isPerfectNumber(28));

//6
// Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
//  и выводит только те числа из диапазона, которые являются совершенными.
//  Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

range = (min, max) => {
  let j =min;
  while(j<max ){
    j++; 
    if(isPerfectNumber(j)=='yes'){
    console.log(j) ; 
    }
  } 
}
// range(1,30);

//7
// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит 
// его на экран в формате «чч:мм:сс».Если при вызове
//  функции минуты и/или секунды не были переданы, то выводить их как 00.

time = (hours, minutes=0, seconds=0) => {
let l;
  if(minutes==0 && seconds==0){
    let l =`${hours}:00:00`;
    console.log(l);
  }else if(minutes==0){
    let l =`${hours}:00:${seconds}`;
    console.log(l);
  }else if(seconds==0){
    let l =`${hours}:${minutes}:00`;
    console.log(l);
  }else if(seconds<10 && minutes<10){
    let l =`${hours}:0${minutes}:0${seconds}`;
    console.log(l);
  }else if(minutes<10 ){
    let l =`${hours}:0${minutes}:${seconds}`;
    console.log(l);
  }else if(seconds<10){
    let l =`${hours}:${minutes}:0${seconds}`;
    console.log(l);
  }else{
    let l =`${hours}:${minutes}:${seconds}`;
    console.log(l);
  }
}
// time(24,2,3);

//8
// Написать функцию, которая принимает часы, 
// минуты и секунды и возвращает это время в секундах.
 
transformInSeconds = (transformHour, transformMinute, transformSecond)=>{
let newSecond=transformHour*3600 + transformMinute*60 +transformSecond;
return newSecond;
}
// console.log(transformInSeconds(5,13,10));

//9
// Написать функцию, которая принимает количество секунд,
//  переводит их в часы,
//  минуты и секунды и возвращает в виде строки «чч:мм:сс».

transformInTime = (second) =>{
let minute = 0;
let hour =0;
  while(second>60){
    if(second> 60){
      minute ++;
      second= second-60;
    } 
    if (minute> 60){
      hour++;
      minute=minute-60;
    }
  }
  time(hour, minute, second);

}
// transformInTime(190);

//10
// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс».
//  При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

difference = (hour1, minute1, second1, hour2, minute2, second2)=> {
let firstData= transformInSeconds(hour1,minute1,second1);
let secondData= transformInSeconds(hour2,minute2,second2);
let div= firstData - secondData;
let result= transformInTime(div);
}
// difference(1,12,10,1,10,2);