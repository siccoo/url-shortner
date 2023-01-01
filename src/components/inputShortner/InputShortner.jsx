const InputShortner = () => {
  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shortner</span>
      </h1>
      <div>
        <input type="text" placeholder="Enter link to be shortened" />
        <button>Shorten</button>
      </div>
    </div>
  );
};

export default InputShortner;
