const tempf =document.querySelector(".weather1")
const cityf =document.querySelector(".weather2 p")
const datef =document.querySelector(".weather2 span")
const emojif =document.querySelector(".weather3 img")
const weatherf =document.querySelector(".weather3 span")
const searchf =document.querySelector(".searchbar")
const form =document.querySelector("form")

form.addEventListener("submit",search)

let target = 'mumbai'

const fetchData=async(target)=>{try {
    const url = `https://api.weatherapi.com/v1/current.json?key=c140fb126bd14e8195c93122231407&q=${target}`
 const response=await fetch(url);
 const data = await response.json();

const{
    current:{temp_c,condition:{icon,text}},
    location:{name,localtime},
}=data;




// updom(data.current.temp_c,data.location.name)
updom(temp_c,name,localtime,icon,text);
    
} catch (error) {
    alert("location not found")
}

 
};

function updom(temp,city,date,emojii,text){
    tempf.innerText=temp;
    cityf.innerText=city;
    const etime=date.split(" ")[1]
    const edate=date.split(" ")[0]
    const eday=new Date(edate).getDay()
    datef.innerText=`${etime}-${getdayname(eday)}-${edate}`
    // 11:01- Monday 2022-09-22

    


    emojif.src=emojii;
    weatherf.innerText=text
}
fetchData(target)

function search(e){
    e.preventDefault();
    target=searchf.value;
   
    fetchData(target)
}

function getdayname(num){
    switch (num) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thusday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        
        default:
            return "don't know"
            
        }
}



   
    
    
