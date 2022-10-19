import './button.css'


const Button = ({children, onClick, modifier, type}) => {
   return(
   <button className={`button ${modifier}`} onClick={onClick} type={type}>
        {children}
   </button>)
}

export default Button;