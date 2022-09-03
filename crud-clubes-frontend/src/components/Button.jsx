function Button({text, color, onClick}) {
  return (
    <a href='#' className={`text-white font-bold py-1 px-3 mx-1 rounded text-xs bg-${color}-600 hover:bg-${color}-800 hover:text-white`} onClick={onClick}>{text}</a>
  )
}

export default Button