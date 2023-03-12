function relogio(){

var horas = document.getElementById('horas')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')


var data = new Date()
var hr = [data.getHours(), data.getMinutes(), data.getSeconds()]

if(hr[0] < 10){hr[0]='0'+hr[0]}
if(hr[1] < 10){hr[1]='0'+hr[1]}
if(hr[2] < 10){hr[2]='0'+hr[2]}

horas.innerHTML = hr[0]
minutos.innerHTML = hr[1]
segundos.innerHTML = hr[2]

}

setInterval(relogio,1000)


