function Item({crestUrl, tla, name, setFocusedTeam, showDeleteModal, showEditModal}) {
  return (
    <tbody>
        <tr className='hover:bg-grey-lighter '>
           <td className='w-10 p-2 whitespace-nowrap'>
                 <div className='flex items-center'>
                  <div className='w-10 h-10 flex-shrink-0 mr-2 sm:mr-3'>
                    <img src={crestUrl} width='40' height='40' alt='Team Crest'/>
                  </div>
                </div>
          </td>
          <td className='py-4 px-6 border-b border-grey-light'>{name}</td>
          <td className='py-4 px-6 border-b border-grey-light'>
            <a href='#' className='text-white  font-bold py-1 px-3 mx-1 rounded text-xs bg-blue-600 hover:bg-blue-800 hover:text-white'>View</a>
            <a href='#' className='text-white  font-bold py-1 px-3 mx-1 rounded text-xs bg-green-600 hover:bg-green-800 hover:text-white' onClick={() => {showEditModal(); setFocusedTeam(tla)}}>Edit</a>
            <a href='#' className='text-white  font-bold py-1 px-3 mx-1 rounded text-xs bg-red-600 hover:bg-red-800 hover:text-white' onClick={() => {showDeleteModal(); setFocusedTeam(tla)}}>Delete</a>
          </td>
        </tr>
        </tbody>
  )
}

export default Item
