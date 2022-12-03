function pow(x, n) 
{ 
  if(n == 0) 
    return 1; 
    
  if(n<0) 
    return pow(x, n+1)/x; 
     
  if(p>0) 
    return pow(x, n-1)*x; 
} 
 
console.log(pow(3, -2))