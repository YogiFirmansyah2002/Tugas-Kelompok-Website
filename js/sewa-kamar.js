const buttonHitung = document.querySelector('#buttonHitung');
buttonHitung.addEventListener('click', function() {
	const inputKamar = document.querySelector('#inputKamar').
	value;
	const inputDurasi = document.querySelector('#inputDurasi').
	value;

	let price;
	if (inputKamar == 'Kelas1') {
		price = 1000000;
	} else if (inputKamar == 'Kelas2'){
		price = 750000;
	} else {
		price = 500000;
	}

	const priceTotal = price * inputDurasi;
	const totalBayar = document.querySelector('#totalBayar');
	totalBayar.innerHTML = `<p> Rp.${priceTotal}</p>`;
})