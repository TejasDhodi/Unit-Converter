console.log("Jay Shree Ram");

// Predefining the values of units
const lengthTypes={ 
    Nm:1,                                                                                                                                
    mm:1000,                                                                                                                                 
    Mm:1e6,                                                                                                                                 
    Cm:1e7,                                                                                                                                
    In:2.54e7,                                                                                                                                 
    f:3.048e8,                                                                                                                                 
    Y:9.144e8,                                                                                                                                 
    m:1e9,                                                                                                                                 
    Km:1e12,                                                                                                                                 
    Mi:1.609e12,                                                                                                                                 
    NM:1.852e12,                                                                                                                                 
   }
   
   
  //  Storing the input and option section in variables                                                                                                                                                         
   const input1 = document.querySelector("#input1");
   const inputType1 = document.querySelector("#inputType1");
   const input2 = document.querySelector("#input2");
   const inputType2 = document.querySelector("#inputType2");

   
   
  //  Function Declaration
   function handleChange(e) {
    let type1 = inputType1.value;
    let type2 = inputType2.value;
    let details = document.querySelector("#details")

    if ([input1, inputType1, inputType2].includes(e.target || e.path[0])) {
      const number = parseInt(input1.value)
      if (isNaN(number)) {
        return null
      } else {
        input2.value = number * (lengthTypes[type1] / lengthTypes[type2]).toFixed(2)
      }

    } else {
      const number = parseInt(input2.value)
      if (isNaN(number)) {
        return null
      } else {
        input1.value = number * (lengthTypes[type2] / lengthTypes[type1]).toFixed(2)
      }
    }

    details.innerHTML = `
   <p>The value of ${input1.value} ${type1} in ${type2} is ${input2.value}</p>
   `;
   }
   
   input1.addEventListener('change',handleChange)
   input2.addEventListener('change',handleChange)
   inputType1.addEventListener('change',handleChange)
   inputType2.addEventListener('change',handleChange)

   
