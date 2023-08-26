const celsius=document.querySelector("#celsius"),
fahrenheit=document.querySelector("#fahrenheit");
kelvin=document.querySelector("#kelvin");
window.addEventListener("load",() => celsius.focus());
//C to F
celsius.addEventListener("input",() =>{fahrenheit.value = (((celsius.value -32) * 5 ) / 9 ).toFixed(2);
if(!celsius.value) fahrenheit.value="";
});

//F to K
fahrenheit.addEventListener("input",() =>{kelvin.value =(((fahrenheit.value -32) * 5 ) / 9 + 273.15).toFixed(2);
if(!fahrenheit.value) kelvin.value="";
});

//F to C
fahrenheit.addEventListener("input",() =>{celsius.value = (((fahrenheit.value -32) * 5 ) / 9 ).toFixed(2);
if(!fahrenheit.value) celsius.value="";
});

//K to F
kelvin.addEventListener("input",() =>{fahrenheit.value = ((((kelvin.value - 273.15) * 9 ) / 5 ) + 32 ).toFixed(2);
if(!kelvin.value) fahrenheit.value="";
});
// C to K
celsius.addEventListener("input",() =>{kelvin.value = (((celsius.value) + 273.15 )).toFixed(2);
    if(!celsius.value) kelvin.value="";
    });
//K to C
kelvin.addEventListener("input",() =>{celsius.value = (((kelvin.value) - 273.15 )).toFixed(2);
    if(!kelvin.value) celsius.value="";
    });