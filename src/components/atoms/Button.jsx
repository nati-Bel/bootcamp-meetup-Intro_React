import './button.css'


// eslint-disable-next-line react/prop-types
function Button({button_content}){
    return(
        <>
            <button className='button'>
            {button_content}
            </button>
        </>
    )
}
export default Button;