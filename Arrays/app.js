// function arr() {
//     let myArray = [{ name: "Banana", image: "apples-101-about-1440x810.jpg"}]; // replace with your own array

// let ul = document.createElement("ul"); // create an unordered list element

// for(let i=0; i<5; i++){ // iterate through the array
//   let li = document.createElement("li"); // create a list item element
//   li.textContent = myArray[i]; // add the array item's value as textContent to the list item element
//   ul.appendChild(li); // append the list item element to the unordered list element
// }

// document.getElementById("listed").appendChild(ul); // append the unordered list element to a HTML element with the id of "myList"
// }

// arr();

// , { name: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ868djAR5mIlAFnnjF---4paarCg48aQTr-g&s"}, { name: "Pinapple", image: "https://post.healthline.com/wp-content/uploads/2021/05/mango-bowl-fruit-1296x728-body.jpg" }, { name: "Kiwi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDWdakDvhm0sIgPRSvK4mgd51ULC-TaVrjA&s" }, { name: "Mango", image:"https://post.healthline.com/wp-content/uploads/2021/05/mango-bowl-fruit-1296x728-body.jpg" }


// const images = [
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ868djAR5mIlAFnnjF---4paarCg48aQTr-g&s',
//     'https://post.healthline.com/wp-content/uploads/2021/05/mango-bowl-fruit-1296x728-body.jpg',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDWdakDvhm0sIgPRSvK4mgd51ULC-TaVrjA&s',
//     'https://post.healthline.com/wp-content/uploads/2021/05/mango-bowl-fruit-1296x728-body.jpg',
//     'https://assets.vogue.com/photos/5deec371e52fbd00086eb68b/16:9/w_2959,h_1664,c_limit/promo-banana.jpg'
//             ];
        
//             const container = document.getElementById('listed');
        
//             for (let i = 0; i < 5; i++) {
//                 const img = document.createElement('img');
//                 img.src = images[i];
//                 container.appendChild(img);
// };

// --------------------------------------------------
// let ul = document.createElement("ul");
// document.getElementById("listed").appendChild(ul);
 
// function myFruit() {
//     const container = document.getElementById('listed');
//     let myArray = ["Banana", "Apple", "Orange", "Kiwi", "Mango"];
//     let fruit = {
//         Banana: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ868djAR5mIlAFnnjF---4paarCg48aQTr-g&s",
//         Orange: "https://post.healthline.com/wp-content/uploads/2021/05/mango-bowl-fruit-1296x728-body.jpg",
//         Apple: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ868djAR5mIlAFnnjF---4paarCg48aQTr-g&s",
//         Kiwi: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbDWdakDvhm0sIgPRSvK4mgd51ULC-TaVrjA&s",
//         Mango: "https://assets.vogue.com/photos/5deec371e52fbd00086eb68b/16:9/w_2959,h_1664,c_limit/promo-banana.jpg"
//     };
//     for (let i = 0; i < myArray.length; i++){
//         const img = document.createElement("img");
//         img.src = fruit[myArray[i]];
//         img.style.display = "block";
//         container.appendChild(img);
//     }

    
// };
// myFruit();



// --------------------------------------------------------------

// function arg(a, array) {
//     let index = array.indexOf(a);
//     if (index == null) {
//         console.log(-1);
//     }
//     else {
//         console.log(index);
//     }

// }
// arg(9, [5, 4, 6, 7, 8]);