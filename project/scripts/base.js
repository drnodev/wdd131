const data = [
    {
        "name": "Summer Drift Challenge",
        "date": "2025-07-06",
        "image": "images/events/event7.webp",
        "description": "Feel the heat and the thrill as the best drifters in Central America take over El Jabalí for a full day of sideways action!",
        "price": "$12"
    },
    {
        "name": "Midnight Drag Wars",
        "date": "2025-07-20",
        "image": "images/events/event3.webp",
        "description": "Engines roar under the stars in this high-octane drag racing showdown. Who will dominate the quarter-mile?",
        "price": "$10"
    },
    {
        "name": "National Circuit Cup",
        "date": "2025-08-03",
        "image": "images/events/event5.webp",
        "description": "The country’s top drivers go head-to-head in a fierce battle of speed and skill around El Jabalí’s legendary curves.",
        "price": "$15"
    },
    {
        "name": "Superbike Sunday",
        "date": "2025-08-17",
        "image": "images/events/event4.webp",
        "description": "An adrenaline-packed day as superbikes race at breakneck speeds. Don’t miss the thrill of two wheels at full throttle!",
        "price": "$10"
    },
    {
        "name": "Classic Car Festival",
        "date": "2025-09-01",
        "image": "images/events/event8.webp",
        "description": "Take a step back in time and admire a stunning collection of vintage cars, restored to their former glory.",
        "price": "$8"
    },
    {
        "name": "Jabalí Rally Showdown",
        "date": "2025-09-14",
        "image": "images/events/event6.webp",
        "description": "Dirt, dust, and daring drivers! Witness rally cars conquer challenging terrain in this epic off-road competition.",
        "price": "$12"
    },
    {
        "name": "Track Day Experience",
        "date": "2025-09-28",
        "image": "images/events/event7.webp",
        "description": "Ever dreamed of racing? Bring your own car and test your limits on the track – safely and legally!",
        "price": "$20"
    },
    {
        "name": "Electric Thunder",
        "date": "2025-10-05",
        "image": "images/events/event3.webp",
        "description": "The future is now! Watch electric race cars show off their power in a silent but deadly battle.",
        "price": "$10"
    },
    {
        "name": "GT Masters El Salvador",
        "date": "2025-10-19",
        "image": "images/events/event4.webp",
        "description": "Top-tier GT cars from across the region compete in this high-speed, high-stakes racing event.",
        "price": "$18"
    },
    {
        "name": "Family Motorsports Day",
        "date": "2025-11-02",
        "image": "images/events/event6.webp",
        "description": "A perfect Sunday with food, fun, and family-friendly racing activities. Kids under 12 enter free!",
        "price": "$10"
    },
    {
        "name": "Drift Mania El Jabalí",
        "date": "2025-11-16",
        "image": "images/events/event8.webp",
        "description": "Watch as the pros burn rubber in style in this fan-favorite drifting competition!",
        "price": "$12"
    },
    {
        "name": "Endurance Race 500",
        "date": "2025-12-01",
        "image": "images/events/event5.webp",
        "description": "Who has the stamina to last 500 kilometers? Teams compete in the ultimate test of endurance and strategy.",
        "price": "$15"
    },
    {
        "name": "JDM Car Meet",
        "date": "2025-12-14",
        "image": "images/events/event3.webp",
        "description": "All about Japanese legends! Come show off your ride or admire some of the finest JDM machines in the region.",
        "price": "$8"
    },
    {
        "name": "Holiday Drift Jam",
        "date": "2025-12-28",
        "image": "images/events/event4.webp",
        "description": "Celebrate the season sideways! Join us for a festive drift show to close out the year in style.",
        "price": "$10"
    },
    {
        "name": "New Year Nitro Bash",
        "date": "2026-01-04",
        "image": "images/events/event7.webp",
        "description": "Kick off the new year with speed, smoke, and style. A full-throttle event to start 2026!",
        "price": "$15"
    },
    {
        "name": "Motors & Music Festival",
        "date": "2026-01-18",
        "image": "images/events/event5.webp",
        "description": "The perfect combo – live music and motorsports! Food trucks, races, and local bands all in one wild day.",
        "price": "$12"
    },
    {
        "name": "Jabalí Drift Season Opener",
        "date": "2025-06-08",
        "image": "images/events/event4.webp",
        "description": "The first drift event of the season set the track on fire with rubber and roar!",
        "price": "$10"
    },
    {
        "name": "Speed & Style Show",
        "date": "2025-05-25",
        "image": "images/events/event6.webp",
        "description": "An elegant blend of speed and car fashion – custom cars and time trials in one unique event.",
        "price": "$12"
    },
    {
        "name": "El Jabalí Bike Fest",
        "date": "2025-05-11",
        "image": "images/events/event3.webp",
        "description": "Motorcycles from all over the region gathered for high-speed action and stunt shows.",
        "price": "$9"
    },
    {
        "name": "Import Tuner Challenge",
        "date": "2025-04-20",
        "image": "images/events/event8.webp",
        "description": "From turbocharged Hondas to wide-body Nissans – imports battled for style and performance glory.",
        "price": "$11"
    },
    {
        "name": "Jabalí Rally Cross",
        "date": "2025-04-06",
        "image": "images/events/event7.webp",
        "description": "Mud, jumps, and wheel-to-wheel action! Rally cross took over the track in a day full of dirt and drama.",
        "price": "$13"
    },
    {
        "name": "Women in Motorsport Day",
        "date": "2025-03-23",
        "image": "images/events/event5.webp",
        "description": "Celebrating female racers and engineers – speed knows no gender at El Jabalí.",
        "price": "$10"
    },
    {
        "name": "Jabalí Open Track Day",
        "date": "2025-03-09",
        "image": "images/events/event4.webp",
        "description": "Public event for amateur racers to test their machines in a controlled environment.",
        "price": "$18"
    },
    {
        "name": "Historic Racing Revival",
        "date": "2025-02-23",
        "image": "images/events/event6.webp",
        "description": "Legends of the past returned to the track in classic race cars and old-school rivalry.",
        "price": "$10"
    },
    {
        "name": "Jabalí Grand Prix",
        "date": "2025-02-09",
        "image": "images/events/event7.webp",
        "description": "The most prestigious event of the season, featuring elite drivers and record-breaking speeds.",
        "price": "$20"
    },
    {
        "name": "Off-Road Showdown",
        "date": "2025-01-26",
        "image": "images/events/event8.webp",
        "description": "From Jeeps to buggies, the terrain was no match for these off-road monsters!",
        "price": "$10"
    },
    {
        "name": "New Year Drift Attack",
        "date": "2025-01-05",
        "image": "images/events/event3.webp",
        "description": "Start the year sideways! Drifters returned to El Jabalí for the first slide of the season.",
        "price": "$12"
    },
    {
        "name": "Christmas Speed Bash",
        "date": "2024-12-22",
        "image": "images/events/event4.webp",
        "description": "Speed, lights and festive fun before the holidays kick in – a race-themed Christmas party!",
        "price": "$10"
    },
    {
        "name": "Nitro Night",
        "date": "2024-12-07",
        "image": "images/events/event5.webp",
        "description": "Night racing, neon lights, and nitro-fueled madness lit up the Jabalí circuit.",
        "price": "$14"
    },
    {
        "name": "End of Year Car Show",
        "date": "2024-11-24",
        "image": "images/events/event6.webp",
        "description": "Closing the season with a massive meet of the cleanest, craziest builds in the country.",
        "price": "$8"
    },
    {
        "name": "Street Legal Showdown",
        "date": "2024-11-10",
        "image": "images/events/event8.webp",
        "description": "Daily drivers and sleepers surprised the crowd in this street-legal racing challenge.",
        "price": "$10"
    }
];

 const products = [
    {
      name: "El Jabalí Cap",
      description: "Adjustable black cap with embroidered logo.",
      price: "$18.00",
      type: "Clothing",
      image: "images/logo.png"
    },
    {
      name: "Race Track Mug",
      description: "Ceramic mug featuring the track layout.",
      price: "$12.00",
      type: "Drinkware",
      image: "images/logo.png"
    },
    {
      name: "Keychain Tire",
      description: "Mini rubber tire keychain with logo.",
      price: "$6.00",
      type: "Accessories",
      image: "images/logo.png"
    },
    {
      name: "El Jabalí T-shirt",
      description: "Soft cotton T-shirt with bold print.",
      price: "$22.00",
      type: "Clothing",
      image: "images/logo.png"
    },
    {
      name: "Limited Edition Poster",
      description: "High-quality poster of the circuit aerial view.",
      price: "$15.00",
      type: "Artwork",
      image: "images/logo.png"
    },
    {
      name: "Water Bottle",
      description: "Aluminum bottle with screw-top lid.",
      price: "$14.00",
      type: "Drinkware",
      image: "images/logo.png"
    }
  ];

  const images = [
  'images/gallery/a.jpg', 'images/gallery/b.jpg', 'images/gallery/c.jpg',
  'images/gallery/d.jpg', 'images/gallery/e.jpg', 'images/gallery/f.jpg',
  'images/gallery/g.jpg', 'images/gallery/h.jpg', 'images/gallery/i.jpg',
  'images/gallery/j.jpg', 'images/gallery/k.jpg', 'images/gallery/l.jpg',
  'images/gallery/m.jpg', 'images/gallery/n.jpg', 'images/gallery/o.jpg',
  'images/gallery/p.jpg', 'images/gallery/q.jpg', 'images/gallery/r.jpg',
  'images/gallery/s.jpg', 'images/gallery/t.jpg', 'images/gallery/u.jpg',
  'images/gallery/v.jpg', 'images/gallery/w.jpg', 'images/gallery/x.jpg',
  'images/gallery/y.jpg', 'images/gallery/z.jpg'
];


  const today = new Date().toISOString().split("T")[0]; 

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `${document.lastModified}`;

    const galleryContainer = document.getElementById('galleryGrid');

    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');
    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });


    try {
        const eventAdds = document.querySelector('.event-adds   ')
        eventAdds.innerHTML = ""
        data.forEach((item, index) => {
            if (index >= 6) {
                return
            }
            const card = `
        <div class="event-card">
            <img class="event-image" src="${item.image}" alt="${item.name}">
            <div class="event-content">
                <div class="event-title">${item.name}</div>
                <div class="event-date">${item.date}</div>
                <div class="event-description">${item.description}</div>
                <div class="event-price">Entry: ${item.price}</div>
                <button class="btn-ticket">Get a Ticket</button>
            </div>
        </div>`
            eventAdds.innerHTML += card
        })
    } catch (error) { }

    try {
        populateFilterOptions();
        displayProducts();
    } catch (error) { }
    try {
        displayEvents(data);
    } catch (error) {
        
    }
    try {
         
    images.forEach(src => {
        const img = document.createElement('img');
        img.width = '400'
        img.height = '400'
        img.src = src;
        img.loading = 'lazy'; // Native lazy loading
        img.alt = 'Gallery image';
        galleryContainer.appendChild(img);
    });
    } catch (error) {
        
    }
})

 function displayProducts(filtered = products) {
    const container = document.getElementById('productList');
    container.innerHTML = '';
    filtered.forEach(product => {
      container.innerHTML += `
        <div class="product-card">
          <img width="100" src="${product.image}" alt="${product.name}" class="product-image" />
          <div class="product-name">${product.name}</div>
          <div class="product-type">${product.type}</div>
          <div class="product-description">${product.description}</div>
          <div class="product-price">${product.price}</div>
        </div>
      `;
    });
  }


function populateFilterOptions() {
    const select = document.getElementById('typeFilter');
    const types = [...new Set(products.map(p => p.type))];
    types.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        select.appendChild(option);
    });
}


function filterProducts() {
    const type = document.getElementById('typeFilter').value;
    if (type === 'all') {
        displayProducts();
    } else {
        const filtered = products.filter(p => p.type === type);
        displayProducts(filtered);
    }
}

function displayEvents(events) {
    const container = document.getElementById("eventsList");
    container.innerHTML = '';

    if (events.length === 0) {
      container.innerHTML = '<p>No events found.</p>';
      return;
    }

    events.forEach(event => {
      container.innerHTML += `
        <div class="event-card">
          <img src="${event.image}" alt="${event.name}" />
          <div class="event-card-content">
            <h3>${event.name}</h3>
            <div class="date">Date: ${event.date}</div>
            <div class="price">Price: ${event.price}</div>
            <p>${event.description}</p>
          </div>
        </div>
      `;
    });
  }

  function filterEvents() {
    const from = document.getElementById('dateFrom').value;
    const to = document.getElementById('dateTo').value;
    const type = document.getElementById('eventFilter').value;

    let filtered = data.filter(event => {
      const eventDate = event.date;

      const matchFrom = from ? eventDate >= from : true;
      const matchTo = to ? eventDate <= to : true;

      return matchFrom && matchTo;
    });

    if (type === 'past') {
      filtered = filtered.filter(event => event.date < today);
    } else if (type === 'upcoming') {
      filtered = filtered.filter(event => event.date >= today);
    }

    displayEvents(filtered);
  }