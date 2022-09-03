
import { useState, useEffect } from 'react'
import './App.css'
import Menu from './components/Menu.jsx'
import api from './api/clubApi.js'
import DeleteModal from './components/DeleteModal';
import FormModal from './components/FormModal'
import Button from './components/Button';

function App() {
  const [teams, setTeams] = useState([]);
  const [focusedTeam, setFocusedTeam] = useState({});
  const [deleteModalIsOpen,setDeleteModalIsOpen] = useState(false);
  const [editModalIsOpen,setEditModalIsOpen] = useState(false);
  const [createModalIsOpen,setCreateModalIsOpen] = useState(false);
  
  const showDeleteModal = () => {
    setDeleteModalIsOpen(true);
    setCreateModalIsOpen(false);
    setEditModalIsOpen(false);
  };
  const hideDeleteModal = () => {
    setDeleteModalIsOpen(false);
    setFocusedTeam({});
  };
  const showEditModal = () => {
    setEditModalIsOpen(true);
    setCreateModalIsOpen(false);
    setDeleteModalIsOpen(false);
  };
  const hideEditModal = () => {
    setEditModalIsOpen(false);
    setFocusedTeam({});
  };
    const showCreateModal = () => {
    setCreateModalIsOpen(true);
    setDeleteModalIsOpen(false);
    setEditModalIsOpen(false);
  };
  const hideCreateModal = () => {
    setCreateModalIsOpen(false);
    setFocusedTeam({});
  };
  
  const fetchTeam = async (tla) => {
    const fetchedTeam = (await api.getTeam(tla))
    setFocusedTeam(fetchedTeam)
  }
  
  useEffect(() => {
    (async function fetchData() {
      const fetchedTeams = (await api.getTeams())
    setTeams(fetchedTeams)
    })();
  }, [focusedTeam]);

  return (
    <div className='container center'>
      <Menu teams={teams} fetchTeam={fetchTeam} showDeleteModal={showDeleteModal} showEditModal={showEditModal}/>
      <div className='fixed bottom-6 right-6'><Button text='new' color='yellow' onClick={() => {showCreateModal(); setFocusedTeam({})}}/></div>
      <DeleteModal focusedTeam={focusedTeam} isOpen={deleteModalIsOpen} hide={hideDeleteModal}/>
      <FormModal focusedTeam={focusedTeam} isOpen={editModalIsOpen} hide={hideEditModal} post={api.editTeam}/>
      <FormModal focusedTeam={focusedTeam} isOpen={createModalIsOpen} hide={hideCreateModal} post={api.cretateTeam}/>
    </div>
  )
}

export default App
