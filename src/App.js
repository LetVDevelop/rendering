import "./App.css";
import NestedCompRen from "./Components/NestedComRen";
function App() {
  // this array of data is considered as sample
  // you can add your own customized data values
  const NestedData = [
    {
      name: "food",
      children: [
        {
          name: "fruits",
          children: [
            {
              name: "apple",
              children: [],
            },
            {
              name: "grape",
              children: [],
            },
            {
              name: "pineapple",
              children: [],
            },
            {
              name: "avocado",
              children: [],
            },
          ],
        },
        {
          name: "vegetables",
          children: [
            {
              name: "onion",
              children: [],
            },
            {
              name: "tomato",
              children: [],
            },
            {
              name: "potato",
              children: [],
            },
            {
              name: "drumsticks",
              children: [],
            },
          ],
        },
        {
          name: "groceries",
          children: [],
        },
      ],
    },
    {
      name: "dress",
      children: [
        {
          name: "Dress for boys",
          children: [
            {
              name: "casual dress",
              children: [],
            },
            {
              name: "smart casual dress",
              children: [],
            },
            {
              name: "business casual dress",
              children: [],
            },
            {
              name: "semi formal dress",
              children: [],
            },
          ],
        },
        {
          name: "Dress for womens",
          children: [
            {
              name: "saree",
              children: [],
            },
            {
              name: "Lehenga choli",
              children: [],
            },
            {
              name: "kurta",
              children: [],
            },
            {
              name: "salwar",
              children: [],
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="container">
      <NestedCompRen data={NestedData} />
    </div>
  );
}

export default App;
