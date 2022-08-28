import api from '../api/clubApi.js'
import Input from './Input.jsx';

function EditModal({focusedTeam, isOpen, hide}) {  
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
            <form className='space-y-6' action="" encType="multipart/form-data" method="POST">
              <Input type='file' name='uploaded_file' placeholder='Image'/>
              <Input type='text' name='name'placeholder='Name'/>
              <Input type='text' name='tla' placeholder='TLA'/>
              <Input type='text' name='areaName' placeholder='Country'/>
              <Input type='url' name='website' placeholder='Website'/>
              <Input type='email' name='email' placeholder='E-mail'/>                                    
              <button type='submit' className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={() =>{ api.editTeam(focusedTeam); hide()}}>Login to your account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal