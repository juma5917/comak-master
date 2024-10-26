const products = [
    {img_path: "client/img/ppe/3m_dust_mask.jpg", product_name: "3M Dust Mask", price: "850"},
    {img_path: "client/img/ppe/boots.jpeg", product_name: "Safety Boots", price: "4,000"},
    {img_path: "client/img/ppe/chemical_suit.jpg", product_name: "Chemical Suit", price: "5,000"},
    {img_path: "client/img/ppe/cold_room_suit.jpg", product_name: "Cold Room Suit", price: "6,500"},
    {img_path: "client/img/ppe/coverall.jpg", product_name: "Coveralls", price: "3,000"},
    {img_path: "client/img/ppe/diamond_grip_gloves.jpeg", product_name: "Diamond Grip Gloves", price: "350"},
    {img_path: "client/img/ppe/ear_muffs.jpg", product_name: "Ear Muffs", price: "350"},
    {img_path: "client/img/ppe/ear_plugs.jpeg", product_name: "Ear Plugs", price: "140"},
    {img_path: "client/img/ppe/face_shield.jpg", product_name: "Face Shield", price: "500"},
    {img_path: "client/img/ppe/gumboots.jpg", product_name: "Gumboots", price: "900"},
    {img_path: "client/img/ppe/hard_hat.jpg", product_name: "Hard Hat", price: "1,800"},
    {img_path: "client/img/ppe/harness.jpeg", product_name: "Harness", price: "20,000"},
    {img_path: "client/img/ppe/heavy_duty_rubber_gloves.jpeg", product_name: "Heavy Duty Rubber Gloves", price: "400"},
    {img_path: "client/img/ppe/helmet_strap_bands.jpg", product_name: "Helmet with Strap Bands", price: "1,500"},
    {img_path: "client/img/ppe/industrial_dungaree.jpeg", product_name: "Industrial Dungaree", price: "5,000"},
    {img_path: "client/img/ppe/leather_gloves.jpeg", product_name: "Leather Gloves", price: "400"},
    {img_path: "client/img/ppe/mask.jpg", product_name: "3PLY Mask", price: "700"},
    {img_path: "client/img/ppe/plastic_filter_dust_mask.jpeg", product_name: "Plastic Filters Dust Masks", price: "120"},
    {img_path: "client/img/ppe/reflector.jpg", product_name: "High Visibility Vest", price: "350"},
    {img_path: "client/img/ppe/rigger_gloves.jpeg", product_name: "Rigger Gloves", price: "320"},
    {img_path: "client/img/ppe/safety_googles.jpg", product_name: "Safety Goggles", price: "300"},
    {img_path: "client/img/ppe/vaultex.jpg", product_name: "Vaultex Dust Mask", price: "280"},
    {img_path: "client/img/ppe/welding_gloves.jpg", product_name: "Welding Gloves", price: "1,300"},
    {img_path: "client/img/ppe/welding_sleeve.jpg", product_name: "Welding Sleeve", price: "4,000"},
];

let current_page = 1;
let items = 8;

function DisplayProducts(products, items_per_page, page){
    page--;

    const product_container = document.querySelector('.fire-container');
    let ppeHtml = "";

    let start = items_per_page * page;
    let end = start + items_per_page;

    let paginatedProducts = products.slice(start, end);

    for (let i = 0; i < paginatedProducts.length; i++){
        let item = paginatedProducts[i];

        const { img_path, product_name, price } = item;

        ppeHtml += `<div class="fire-equip">`;
        ppeHtml += `    <img src=${img_path} alt=${product_name}/>`;
        ppeHtml += `    <div>`;
        ppeHtml += `        <h5>${product_name}</h5>`;
        ppeHtml += `        <h4>Kshs. ${price}</h4>`;
        ppeHtml += `    </div>`;
        ppeHtml += `</div>`;

        /*console.log(item);*/
    }

    product_container.innerHTML = ppeHtml;
}

function setUpPagination (commodities, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(commodities.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++){
		let btn = PaginationButton(i, commodities);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, commodities) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function (){
		current_page = page;
		DisplayProducts(commodities, items, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}

const pagination_element = document.getElementById('pagination');

DisplayProducts(products, items, current_page);
setUpPagination(products, pagination_element, items);