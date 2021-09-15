

const app=new Vue({
    el:"#app",
    data:
    {
        url:"https://api.openweathermap.org/data/2.5/",
        key:"Key API=> own key",
        searchBar:"",
        city:"",
        temp:"",
        desc:"",
        minmax:""
        
    },
    methods:
    {
        onEnter:function(){

            let query=this.url+"weather?q="+this.searchBar+"&appid="+this.key+"&units=metric&lang=en"
            fetch(query).then(weather=>{
                return weather.json()
            })
            .then(this.displayResult)
        },
        displayResult:function(result){
            this.city=result.name+","+result.sys.country;
            this.temp=Math.round(result.main.temp)+"°C";
            this.desc=result.weather[0].description;
            this.minmax=Math.round(result.main.temp_max)+"°C / "+Math.round(result.main.temp_min)+"°C"
            
        }
    }
})
