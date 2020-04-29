let cityName= document.getElementById("cityName")
let stateName=document.getElementById("stateName")
let weather= document.getElementById("weather")
let button =document.getElementById("button")


let apiKey ="7db6c338235158e4090a44d4e05a565c"

button.addEventListener("click",function(){
    let city = cityName.value
    let state = stateName.value 
    
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&APPID=${apiKey}&units=metric`)
.then(response => response.json())
.then(datas =>{
    //console.log(datas)
    //console.log(datas.main.temp)
    console.log(datas.main.temp_min)
    console.log(datas.main.temp_max)
    console.log(datas.main.pressure)
    console.log(datas.main.temp_min)
    console.log(datas.name)
   let dataItems=  ` 
                     <p>TEMP : ${datas.main.temp}</P>
                     <p>MIN : ${datas.main.temp_min} </P>
                     <p> MAX : ${datas.main.temp_max} </p>
                     <p>PRESSURE : ${datas.main.pressure}</p>
                     <p>CITY :  ${datas.name} </p> 
                          
                   `
weather.innerHTML= dataItems
})

})

