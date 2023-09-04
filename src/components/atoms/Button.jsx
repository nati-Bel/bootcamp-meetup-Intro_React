import './button.css'


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