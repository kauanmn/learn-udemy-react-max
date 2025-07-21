export default function TabButton({ children, onSelect }) {
  console.log("TAB BUTTON RENDERING");
  return (
    <li>
      <button onClick={onSelect} className="tab-button">
        {children}
      </button>
    </li>
  );
}
