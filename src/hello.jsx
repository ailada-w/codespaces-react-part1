// const Hello= (props)=>
//         <>
//         <h1>Hello {props.fname }  {props.lname } !!!</h1>
//         </>
// export default Hello;
import './hello.css'
function Hello({fname,lname,age=20}){
    return(
        <>
        <h1>Hello {fname }  {lname } {age} !!!</h1>
        </>
    );
}
export default Hello;