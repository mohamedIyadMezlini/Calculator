let calculator = JSON.parse(localStorage.getItem('calculator'))|| '';
  console.log(calculator)
  function calculate(add){
    if(add === '='){
      calculator = eval(calculator);
      document.querySelector('.print').innerHTML= `${calculator}`;
      if (calculator === 0){
        calculator ='';
      }
    }
    else{
      calculator += add ;
      document.querySelector('.print').innerHTML= `${calculator}`;
    }
  localStorage.setItem('calculator',JSON.stringify(calculator));
  }