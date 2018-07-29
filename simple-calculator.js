function calculator(a,b,sign){

  if (sign == '+') {
    return a + b;
    
   } else if (sign == '-') {
     return a - b;
     
    } else if (sign == '/') {
    return a / b;
    
    } else if (sign == '*') {
    return a * b;
    
    } else {
    return "unknown value"
    }

}

//function calculator(a,b,sign){
//  switch(sign)
//  {
//  case '+': return a + b;
//  case '-': return a - b;
//  case '*': return a * b;
//  case '/': return a / b;
//  default: return "unknown value";
//  }

//}