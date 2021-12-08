import React from "react";
import "./search-box.styles.css";

//now we will use another functional component functional component unlike our class component App.js it dont have access to the state because they dont have access to the constructor which is class method on our component that we import from react that we extends our class from they also dont have access to the class method. they dont have internal state and life-cycle methods becuase wee dont alsways neeed to use life cycle method or internal state,sometimes all we want to do is render some HTML and that's what a functional component really is.Unlike a class component, a functional component is just a component that gets some props and returns some HTML.main thing to remember is that if you don't think you need internal state nor access to lifecycle methods, then just use a functional component because it's easier to read. It's actually easier to test, as we'll see later in the course. And it's in some ways smaller

export const SearchBox = ({ placeholder, handleChange }) => (
  <div>
    <input
      className="search"
      type="search"
      placeholder={placeholder} //why placeholder?  as far as placeholder goes,we might want this to be dynamic because maybe another place that wants to use search box doesn't want the placeholder to say search monsters.    Let's say they want to search people or anything else    We want place to be a prop that gets passed in.And as we learn with our structure, we can d structure that prop off of the props object because all the props come in as one big objects, so let's d structure it off and then pass it into our placeholder
      onChange={handleChange}
    />
  </div>
  /* //and then on change can be another prop that gets passed in which is a function under the name of handle  change and we'll just structure that one off as well. And then we will replace the value inside of our change right here. */
);

//And this is what's great about react is this component driven style of writing code.Our search box is just a presentational component that pretty much styles an input and then it takesany functionality that it might need in its handle change property.But now we have this reusable search box component.And this is great because we can minimize the amount of repeat code that we have, we don't have to write an input and then style it inside of a local file because we can separate it into its own comonent. This will become much more apparent as we start building larger and larger applications where more of the code gets reused. Right now, the benefits might not be so obvious, but it's definitely the style that we want to codei n.And this is one of the huge advantages of react is writing these smaller and smaller reusable components.
