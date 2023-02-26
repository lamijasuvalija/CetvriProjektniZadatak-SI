const lisica_result=document.getElementById('lisica_result');
const pas_result=document.getElementById('pas_result');
const macka_result = document.getElementById('macka_result');
const lisica_btn=document.getElementById('lisica_btn');
const pas_btn=document.getElementById('pas_btn');
const macka_btn=document.getElementById('macka_btn');

lisica_btn.addEventListener('click', getRandomLisica);
pas_btn.addEventListener('click', getRandomPas);
macka_btn.addEventListener('click', getRandomMacka);


function getRandomMacka() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			macka_result.innerHTML = `<img src=${data.file} alt="macka" />`
		});
}

function getRandomLisica(){
    fetch('https://randomfox.ca/floof/')
    .then(res=> res.json())
    .then(data=>{
        lisica_result.innerHTML= `<img src="${data.image}" /> `
    })
}


function getRandomPas() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomPas();
			}
			else {
				pas_result.innerHTML = `<img src=${data.url} alt="pas" />`;
			}
		});
}
