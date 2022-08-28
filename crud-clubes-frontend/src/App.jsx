
import { useState, useEffect } from 'react'
import './App.css'
import Menu from './components/Menu.jsx'
import api from './api/clubApi.js'
import DeleteModal from './components/DeleteModal';
import EditModal from './components/EditModal'

function App() {
  const [teams, setTeams] = useState([]);
  const [focusedTeam, setFocusedTeam] = useState('');
  const [deleteModalIsOpen,setDeleteModalIsOpen] = useState(false);
  const [editModalIsOpen,setEditModalIsOpen] = useState(false);
  
  const hideDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };
  const showDeleteModal = () => {
    setDeleteModalIsOpen(true);
    setEditModalIsOpen(false);
  };
    const hideEditModal = () => {
    setEditModalIsOpen(false);
  };
  const showEditModal = () => {
    setEditModalIsOpen(true);
    setDeleteModalIsOpen(false);
  };
  
  
  useEffect(() => {
    async function fetchData() {
      const fetchedTeams = (await api.getTeams())
    setTeams(fetchedTeams)
  }
  fetchData();
  }, [deleteModalIsOpen]);

console.log(teams);
  return (
    <div className='App'>
      <Menu teams={teams} setFocusedTeam={setFocusedTeam} showDeleteModal={showDeleteModal} showEditModal={showEditModal}/>
      <DeleteModal focusedTeam={focusedTeam} isOpen={deleteModalIsOpen} hide={hideDeleteModal}/>
      <EditModal focusedTeam={focusedTeam} isOpen={editModalIsOpen} hide={hideEditModal}/>
    </div>
  )
}

export default App
