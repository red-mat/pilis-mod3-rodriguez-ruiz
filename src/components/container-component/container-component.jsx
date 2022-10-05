import './container-component.css'

export default function Container({modifier='', style={}, children}) {
    return(
        <div className={`container {modifier}`} style={style}>
            {children}
        </div>
    )    
};
