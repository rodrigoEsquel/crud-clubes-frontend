import { useRef } from 'react';
import api from '../api/clubApi.js'
import Input from './Input.jsx';
import handlePost from '../utilities/handlePost.js';
import { useState } from 'react';
import { useEffect } from 'react';

const emptyBody = {
  name: '',
  tla: '',
  areaName: '',
  website: '',
  email: '',
  uploaded_file: null,
};

function EditModal({focusedTeam, isOpen, hide}) {
  const [body, setBody] = useState(emptyBody);
  const file = useRef();

  useEffect(()=> {
  setBody(state => ({...state, 
    name: focusedTeam.name ? focusedTeam.name : '',
    tla: focusedTeam.tla ? focusedTeam.tla : '',
    areaName: focusedTeam.area ? focusedTeam.area.name : '',
    website: focusedTeam.website ? focusedTeam.website : '',
    email: focusedTeam.email ? focusedTeam.email : '',
    uploaded_file: null,
  }));
  },[focusedTeam])
  
  const resetModal = () => {
    hide();
    if (file.current) {
      file.current.value = null;
    }
  }

  const submit = (event) => {
    handlePost(event, api.editTeam, focusedTeam?.tla, {...body, uploaded_file: file.current.files[0]}); 
    resetModal();
  }

  const handleInput = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setBody(state => ({...state, [key]: value}));
  }

  const handleFile = (event) => {
    setBody(state => ({...state, uploaded_file: event.target.files[0]}));
  }

  return (
    <div tabIndex='-1' className={'w-96 overflow-visible fixed top-1 left-1/2 -translate-x-1/2 z-50 h-modal md:h-full transition ease-in-out'+ (isOpen ? ' visible opacity-100' : ' invisible opacity-0')}>
      <div className='relative p-4 w-full max-w-md h-full md:h-auto'>
        <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <button type='button' className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white' onClick={resetModal}>
            <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
            <span className='sr-only'>Close modal</span>
          </button>
          <div className='py-6 px-6 lg:px-8'>
          <h3 className='mb-4 text-xl font-medium text-gray-900 dark:text-white'>Edit team information</h3>
            <form className='space-y-6' action="" encType="multipart/form-data" method="POST" onSubmit={submit}>
              <div className="relative">
                <input type='file' name='uploaded_file' ref={file} className="block px-2.5 pb-2.5 pt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white peer" placeholder=" " onChange={handleFile}/>
                <label htmlFor='uploaded_file' className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Image</label>
              </div>
              <Input type='text' name='name'placeholder='Name' onChange={handleInput} value={body.name}/>
              <Input type='text' name='tla' placeholder='TLA' onChange={handleInput} value={body.tla}/>
              <Input type='text' name='areaName' placeholder='Country' onChange={handleInput} value={body.areaName}/>
              <Input type='url' name='website' placeholder='Website' onChange={handleInput} value={body.website}/>
              <Input type='email' name='email' placeholder='E-mail' onChange={handleInput} value={body.email}/>
              <button type='submit' className='w-full text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Edit Team Information</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal