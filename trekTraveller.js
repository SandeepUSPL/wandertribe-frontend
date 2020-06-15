document.querySelector('.trek-pagination h2').innerHTML =
    `Treks > ${localStorage.getItem('trek_state')} > ${localStorage.getItem('trek_title')} > Package Details > <span>Traveller Information</span>`;

document.querySelector('.travelInfo>div>h1').textContent = localStorage.getItem('trek_title');

document.querySelector('.travelInfo>div>div>h3').textContent = `${localStorage.getItem('trek_days')} D`;

document.querySelector('.travelInfo>div>div>h3:nth-of-type(2)').textContent = `${localStorage.getItem('trek_days')-1} N`;

document.querySelector('.travelInfo>div>h3').textContent = `Total Amount (${localStorage.getItem('trek_people')} Adult)`;

document.querySelector('.travelInfo>div>h3:nth-of-type(2)').textContent = localStorage.getItem('grand_total');

document.querySelector('.contactInfo form>div:nth-of-type(1)>input').value =
    localStorage.getItem('user_name');

document.querySelector('.contactInfo form>div:nth-of-type(2)>input').value =
    localStorage.getItem('user_email');

document.querySelector('.contactInfo form>div:nth-of-type(3)>input').value =
    localStorage.getItem('mobile');