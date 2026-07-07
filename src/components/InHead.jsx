const InHead = function({name,year}){
    //props is properties
    //use destructuring to get the values from props
    return(
      //can write js html
      <div>
      <h2 style = {{color : 'pink'}}> Insta is popular {name}  </h2>
       <h3>Year is {year}</h3>
      </div>
    )
  };
export default InHead;