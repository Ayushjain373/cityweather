

const submitBtn = document.querySelector('#submitBtn');
const cityName = document.querySelector('#cityName');
const city_name = document.querySelector('#city_name');
const temp_status = document.querySelector('.temp_status');
const temp_real_value = document.getElementById('temp_real_value');
const dataHide = document.querySelector('.middle_layer');
//7675189be4dc9cb46ba79ca588f29578
//api.openweathermap.org/data/2.5/weather?q={city name}&units=metric&appid={API key}


const getInfo = async(event)=>{

    event.preventDefault();
    //console.log(cityName.value)
    let cityVal = cityName.value;

    if(cityVal==="")
    {
        //console.log( `Pls enter the city name before Search`)

        city_name.innerText = `Pls enter the city name before Search`;
        dataHide.classList.add('data_hide');

    }
    else{

      try{

        let url =   `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7675189be4dc9cb46ba79ca588f29578`

        const res = await fetch(url);
        const data = await res.json();
      
        const arrData = [data]
        console.log(data);
        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country} `
        temp_status.innerText = arrData[0].weather[0].main;
        temp_real_value.innerText = Math.ceil(arrData[0].main.temp);
        const tempmood = arrData[0].weather[0].main;

         if(tempmood=="Clear")
         {
            temp_status.innerHTML= "<i class='fas fa-sun' style='color:#eccc68;'></i>"
         }else if(tempmood=="Clouds")
         {
           temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
         }else if(tempmood=="Rain")
         {
           temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color=#a4bobe;'></i>"

         }else if(tempmood=="Snow"){
              
           temp_status.innerHTML = "<i class='fas fa-snowman'></i>"
         }else{

          temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
         }

         dataHide.classList.remove('data_hide');
         cityVal='';


      }catch(err){


        city_name.innerText = `Pls enter the  right city name `;
        dataHide.classList.add('data_hide');

      }

    }
  
}

submitBtn.addEventListener('click',getInfo)