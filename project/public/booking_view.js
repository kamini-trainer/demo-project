async function fetchDataAndPopulate() {
   try {
       const response = await fetch('showlist.json');
       if (!response.ok) {
           throw new Error('Network response was not ok ' + response.statusText);
       }
       const data = await response.json();
       console.log(data);
       populateAll(data);
   } catch (error) {
       console.error('There was a problem with the fetch operation:', error);
   }
}

// Function to populate data
function populateAll(data) {
   const content = document.getElementById('movie_list');
   data.forEach(item => {
       const div = document.createElement('div');
       div.textContent = item.title; // Assuming each item has a 'title' property
       div.className = 'card';


       const des = document.createElement('div');
       des.textContent = item.description; // Assuming each item has a 'title' property
       des.className = 'description';
       div.appendChild(des);

       const price = document.createElement('div');
       price.textContent = item.price; // Assuming each item has a 'title' property
       price.className = 'price';
       div.appendChild(price);

       const seats = document.createElement('div');
       seats.textContent = item.seats; // Assuming each item has a 'title' property
       seats.className = 'seats';
       div.appendChild(seats);

       const button = document.createElement("button");
       button.innerText = "ADD";
       button.className="add-btn";
       button.addEventListener("click", function() {
         console.log("Button was clicked!");
         //1. capture the id of the showlist
         //2. store alll the selected items in an array
         //3. modify the /submit endpoint so that it can accept the showlist you selected
         //4. It ideally needs to store that value. For now, you can store it in an array
         //5. create a user booking section page, on load of that page call an endpoint and
         // finally display all the selected items there.
         // You can add more functionality here
     });
       // add function to add the item to the list
       div.appendChild(button);

       content.appendChild(div);
   });
}

// Fetch data and populate on load
fetchDataAndPopulate();