
const cityName=document.getElementById('cityName');
const submitBtn =document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    event.preventDefault();
    // alert("hi");
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText=`Plz write Your City Name`;
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=c0e5753cce1539c070b9ec978eb04f91`
            const resp=await fetch(url);
            const data = await resp.json();
            console.log(data)
            const arrData=[data];

            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            tempToC=parseInt(arrData[0].main.temp)
            temp_real_val.innerText=(tempToC-273);
              
            const tempMood=arrData[0].weather[0].main;

            // sunny or cloudy
            if(tempMood=="Clear"){
                temp_status.innerHTML=
                    "<i class='fas fa-sun' style='color: yellow;'></i>";
            }else if(tempMood=="Clouds"){
                temp_status.innerHTML=
                    "<i class='fas fa-cloud' style='color: lightblue;'></i>";
            }else if(tempMood=="Rain"){
                temp_status.innerHTML=
                    "<i class='fas fa-cloud-rain' style='color: white;'></i>";
            }else {
                temp_status.innerHTML=
                    "<i class='fas fa-sun' style='color: yellow;'></i>";
            }
            datahide.classList.remove('data_hide');

        }
        catch{
            city_name.innerText=`plz enter the city name properly`
            datahide.classList.add('data_hide');
        }
        
    }

}

submitBtn.addEventListener('click',getInfo);