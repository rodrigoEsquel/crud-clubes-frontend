import { useRef } from 'react';
import api from '../api/clubApi.js'
import Input from './Input.jsx';
import handlePost from '../utilities/handlePost.js';
import { useState } from 'react';

const emptyTeam = {
  name: '',
  tla: '',
  areaName: '',
  website: '',
  email: '',
};

function EditModal({focusedTeam, isOpen, hide}) {
  const [team, setTeam] = useState(emptyTeam);
  const file = useRef()

  const handleInput = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setTeam(state => ({...state, [key]: value}))
  }

  return (
    <div tabIndex='-1' className={'w-96 overflow-visible fixed top-1 left-1/2 -translate-x-1/2 z-50 h-modal md:h-full'+ (isOpen ? '' : ' hidden')}>
      <div className='relative p-4 w-full max-w-md h-full md:h-auto'>
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <button type='button' className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white' onClick={hide}>
            <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
            <span className='sr-only'>Close modal</span>
          </button>
          <div className='py-6 px-6 lg:px-8'>
          <h3 className='mb-4 text-xl font-medium text-gray-900 dark:text-white'>Edit team information</h3>
            <form className='space-y-6' action="" encType="multipart/form-data" method="POST" onSubmit={(e) =>{handlePost(e, api.editTeam, focusedTeam.tla, team, file.current.files[0]); hide()}}>
              <div className="relative">
                <input type='file' name='uploaded_file' ref={file} className="block px-2.5 pb-2.5 pt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white peer" placeholder=" " />
                <label htmlFor='uploaded_file' className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Image</label>
              </div>
              <Input type='text' name='name'placeholder='Name' onChange={handleInput} value={team.name}/>
              <Input type='text' name='tla' placeholder='TLA' onChange={handleInput} value={team.tla}/>
              <Input type='text' name='areaName' placeholder='Country' onChange={handleInput} value={team.areaName}/>
              <Input type='url' name='website' placeholder='Website' onChange={handleInput} value={team.website}/>
              <Input type='email' name='email' placeholder='E-mail' onChange={handleInput} value={team.email}/>
              <button type='submit' className='w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Edit Team Information</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal