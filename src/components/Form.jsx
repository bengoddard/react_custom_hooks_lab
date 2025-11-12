import { useLocalStorage } from "../hooks/useLocalStorage";
function Form() {
  const [name, setName] = useLocalStorage("name",  );
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", )
    return (
      <>
        <form style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name">Name:</label>
            <input type="text" data-testid={"name"} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor="service">Service Number:</label>
            <input type="text" data-testid={"service"} onChange={(e) => setServiceNumber(e.target.value)}/>

        </form>
        <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
        <h4>{serviceNumber ? `Here's your service number ${serviceNumber}` : "Enter your service number" }</h4>
      </>
    );
}

export default Form