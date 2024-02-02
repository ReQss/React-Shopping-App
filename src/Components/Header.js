import React from "react";
function Header(props){
    const [searchText,setSearchText] = React.useState("");
    function handleChange(event) {
      const newText = event.target.value;
      setSearchText(newText);
      props.textChange(newText); // Pass the updated text directly
    }
    function handleSubmit(event){
      event.preventDefault();
      props.textChange(searchText);
    }
    return(
        <div className="header">
      <div>
      <p>Trip-Tip</p>
      </div>
      <div>
        <form>
        <input 
        type="text"
        name = "searchText"
        placeholder='Search your trip'
        onChange={handleChange}
        value = {searchText}
        onSubmit={handleSubmit}
        />
        </form>
      </div>
      <div>
      
        </div>
    </div>
    )
}export default Header;