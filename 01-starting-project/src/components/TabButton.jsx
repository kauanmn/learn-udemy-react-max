export default function TabButton({ children }) {
  function handleClick() {
    console.log("Hello, World!");
  }

  return (
    <li>
      <button onClick={handleClick} className="tab-button">
        {children}
      </button>
    </li>
  )
} 