function App() {
  //metods Array
  const people = [
    { name: "Nikita", age: 29, proffesion: "FronEnd" },
    { name: "Alex", age: 30, proffesion: "PM" },
    { name: "Look", age: 35, proffesion: "Sells" },
    { name: "Just", age: 32, proffesion: "Sellers" },
    { name: "Only", age: 21, proffesion: "Auto" },
    { name: "Early", age: 28, proffesion: "Credit" },
  ];
  // -------------------------------------------------------
  //Default works with Array ES5
  // for (let i = 0; i < people.length; i++) {
  //   console.log(people[i]);
  // }
  //
  // -------------------------------------------------------
  //Default works with Array ES6
  // for (let person of people) {
  //   console.log(person);
  // }
  //
  // -------------------------------------------------------
  // ForEach
  // people.forEach(function (person, index, pArr) {
  //   console.log(person);
  //   console.log(index);
  //   console.log(pArr);
  // });
  //
  // people.forEach((person) => console.log(person));
  //
  // -------------------------------------------------------
  //Map
  // const newPeople = people.map((person) => {
  // return person;
  // return "Hello";
  // return person.age;
  // return `${person.name} (${person.age})`;
  // });
  // console.log(newPeople); // metod Map return new Array
  //
  // -------------------------------------------------------
  //Filter
  //
  // -------------------------------------------------------
  //Find
  //
  // -------------------------------------------------------
  //FindIndex
  //
  // -------------------------------------------------------
  return <div className="App">Hello</div>;
}

export default App;
