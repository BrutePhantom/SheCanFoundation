function Form() {
  return (
    <div>
      <form>
        <input placeholder="Name" type="text" required></input>
        <input placeholder="Phone" type="tel" required></input>
        <input placeholder="Email" type="email" required></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
