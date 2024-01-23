

function Button(){
    const handleClick = (e) => e.target.textContent = "Ouch";

    return(<button onDoubleClick={(e) => handleClick(e)}> Click me </button>)
}


export default Button;


// IMPORTANT

/*********************** HANDLE ONCLICK EVENT WITH A VARIABLE
// const handleClick2 = (name) => console.log(name + " stop clicking me")
// when parentesies are present in "onClick" for instance handleClick2("Leo")
// they will invoke the function directly, without us pressing. 
// onClick={ () => handleClick2("Leo")}
*************************/


/*********************** CONDITIONED CLICK EVEN WITH IF 
let count = 0;
    const handleClick = () => {
        if (count < 3){
            console.log(count);
            count ++;
        }};
    return(<button onClick={handleClick}> Click me </button>)
***********************/

/****************EVENT HANDLING FOR A BUTTON 
const handleClick = (e) => e.target.textContent = "Ouch";
return(<button onDoubleClick={(e) => handleClick(e)}> Click me </button>)

****************/