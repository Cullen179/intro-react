function ExampleComponent(props) { 
  const { title, showItems, items } = props; 

  return ( 
    <div> 
      {/* Rendering the title prop */} 
      <h2>{title}</h2> 
      {/* Conditional rendering based on the showItems prop */} 
      {showItems && ( 
        <ul> 
          {/* Rendering a list of items */} 
          {items.map((item, index) => ( 
            <li key={index}>{item}</li> 
          ))} 
        </ul> 
      )} 
      {/* Rendering children passed to the component */} 
      {props.children} 
    </div> 
  ); 
} 

export default function App() { 
  const items = ['Item 1', 'Item 2', 'Item 3'];  

  return ( 
    <div> 
      {/* Using the ExampleComponent with props */} 
      <ExampleComponent title="Example Component" showItems items={items}> 
        {/* Adding additional content as children */} 
        <p>This is a child element.</p> 
      </ExampleComponent> 
    </div> 
  ); 
} 