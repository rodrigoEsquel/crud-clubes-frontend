import Button from "./Button";

function Item({crestUrl, tla, name, fetchTeam, showDeleteModal, showEditModal}) {
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
          <td className='py-4 border-b border-grey-light'>{name}</td>
          <td className='py-4 border-b border-grey-light'>
            <Button text='View' color='blue' onClick={()=>{}}/>
            <Button text='Edit' color='green' onClick={() => {showEditModal(); fetchTeam(tla)}}/>
            <Button text='Delete' color='red' onClick={() => {showDeleteModal(); fetchTeam(tla)}}/>
          </td>
        </tr>
        </tbody>
  )
}

export default Item
