 // Fetch random images from Lorem Picsum API
 const apiUrl = 'https://picsum.photos/250/300';

 async function fetchImages() {
     const pinsContainer = document.getElementById('pinsContainer');

     for (let i = 0; i < 100; i++) {
         const pin = document.createElement('div');
         pin.classList.add('pin');
         
         const img = document.createElement('img');
         img.src = `${apiUrl}?random=${i}`;
         img.alt = 'Random Image';
         
         pin.appendChild(img);
         pinsContainer.appendChild(pin);
     }
 }

 fetchImages();
