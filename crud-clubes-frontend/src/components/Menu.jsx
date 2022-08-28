import Item from './Item';

function Menu({teams, setFocusedTeam, showDeleteModal, showEditModal}) {
  return (
    <div className=''>
      <table className=''>
        <thead>
    <tr className=''>
      <th className=''>Crest</th>
      <th className=''>Name</th>
      <th className=''>Actions</th>
    </tr>
    </thead>
      {teams.map(({crestUrl,tla,name}) => (
        <Item key={tla} tla={tla} name={name} crestUrl={crestUrl} setFocusedTeam={setFocusedTeam} showDeleteModal={showDeleteModal} showEditModal={showEditModal}/>
      ))}
      </table>
    </div>
  )
}

export default Menu