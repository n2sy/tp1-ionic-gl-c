const intitule = document.getElementById('intitule');
const somme =  document.getElementById('somme');
const btnAdd = document.getElementById("btnAjouter");
const btnDel = document.getElementById("btnEffacer");
const liste = document.getElementById("listDep");
const spanDep = document.getElementById("total");


var totalDepenses = 0;

btnAdd.addEventListener('click', () => {

	if(intitule.value.trim().length == 0 || somme.value.trim().length == 0) {
		presentAlert();
		return ;
	}

	console.log(intitule.value, somme.value);
	//const msg = intitule.value + ' : ' + somme.value + ' $';
	const msg = `${intitule.value} : ${somme.value} $`;

	const newLabel = document.createElement('ion-label');
	newLabel.textContent = msg;

	const newItem = document.createElement('ion-item');
	newItem.appendChild(newLabel);

	liste.appendChild(newItem);

	//totalDepenses += Number(somme.value);
	totalDepenses += +somme.value;
	spanDep.textContent = totalDepenses + ' $';

	clear();

})

function clear() {
	intitule.value ='';
	somme.value = '';
}

btnDel.addEventListener('click', clear);

 function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert';
    alert.subHeader = 'Important message';
    alert.message = 'This is an alert!';
    alert.buttons = [
    {
    	text : 'Hazem',
    	role : 'cancel',
    	handler : () => {
    		console.log("Hazem")
    	}

    },
    {
    	text : 'Ahdy',
    	handler : () => {
    		console.log("Ahdy")
    	}

    }];

    document.body.appendChild(alert);
    alert.present();
  }





