function checkPrime(N,number){

  for(let a=N;a<=number;a++){
      let count= 0;
  for(let i=1;i<=N;i++){
    if(a%i==0){
      count++
    }
  }
  if(count==2){
     console.log(a)
  }
  
  }
}
checkPrime(2,30);