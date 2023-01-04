function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  const fnInside = outside(3);
  
  const result = fnInside(0);
  const resultAdd5 = fnInside(5);
  const resultAdd20 = outside(8)(20);

  console.log(result)
  console.log(resultAdd5)
  console.log(resultAdd20)