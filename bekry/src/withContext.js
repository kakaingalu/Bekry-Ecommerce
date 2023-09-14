import React from "react";
import Context from "./Context";


// withContext function takes a React component as its parameter. 
//It then returns a function that takes the component’s props as
//a parameter

//Within the returned function, we’re wrapping the component in 
// our context, then assigning it the context as a prop: context={context}. 
// The {...props} bit ensures that the component retains any props that were 
// passed to it in the first place.
const withContext = wrapperComponent => {
    
    const withHOC = props => {
        return (
            <Context.Consumer>
                {context => <wrapperComponent context={context} {...props} />}
            </Context.Consumer>
        );
    }
    return withHOC;
}

export default withContext;