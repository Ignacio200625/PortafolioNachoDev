import '../App.css'
function Button({ text, onClick = null }) {

    return (
        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-sm cursor-pointer " onClick={onClick}>{text}</button>
    )

}

export default Button;