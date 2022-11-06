import "./styles.css";

const storeProducts = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];
const categoryData = [
  ...new Set(
    storeProducts.map((element) => {
      return element.category;
    })
  )
];
const styleCategory = {
  border: "2px solid palevioletred",
  padding: "5px",
  margin: "12px"
};
console.log();

categoryData.forEach((a) =>
  console.log(
    storeProducts.filter((cat) => cat.category === a).map((el) => el.name)
  )
);

function CategoryDiv() {
  return (
    <div>
      {categoryData.map((a) => (
        <div>
          <p style={styleCategory}>{a}</p>
          <div>
            <ul>
              {storeProducts
                .filter((cat) => cat.category === a)
                .map((el) => (
                  <li>{el.name}</li>
                ))}
            </ul>
          </div>
          ;
        </div>
      ))}
    </div>
  );
}

const checkboxStyle = { display: "flex" };

export default function App() {
  return (
    <div className="App">
      <div>
        <input placeholder="search.." />
        <div style={checkboxStyle}>
          <input type="checkbox" />
          <p>Only show product in store</p>
        </div>
      </div>
      <CategoryDiv />
    </div>
  );
}
