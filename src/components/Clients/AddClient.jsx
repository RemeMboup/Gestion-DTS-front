import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addClient } from '../../features/data/dataSliceClient';
import { useNavigate } from 'react-router-dom';
import { Label, TextInput, Button} from "flowbite-react";

const AddClient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nom, setNom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  

  //const [formData, setFormData] = useState(nom:'', adresse:'', email:'',telephone:''})
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addClient({ nom,adresse, email, telephone })).then(() => {
      navigate('/clientList');
    });
  };

  return (
    <div>
      <h1>Add Client</h1>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
        </label>
        <label>
          Adresse:
          <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Telephone:
          <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate('/clientList')}>Cancel</button>
      </form> */}
      

      {/* <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
            <input type="nom" name="floating_nom" value={nom} onChange={(e) => setNom(e.target.value)} id="floating_nom" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_nom" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nom</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <input type="adresse" name="floating_adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} id="floating_adresse" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_adresse" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Adresse</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="email" name="floating_email" value={email} onChange={(e) => setEmail(e.target.value)} id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
            <input type="tel" pattern="[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}" name="floating_phone" value={telephone} onChange={(e) => setTelephone(e.target.value)} id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (77-123-90-90)</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form> */}

<form  onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="nom" value="Your Name" />
        </div>
        <TextInput type='text' id="nom"  placeholder="Mareme Mboup" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="adresse" value="Your Address" />
        </div>
        <TextInput id="adresse"  placeholder="Almadies 2" name="adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="telephone" value="Phone number (77-123-90-90)" />
        </div>
        <TextInput id="telephone"  type="text" pattern="[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}" name="phone" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
      </div>

      <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Submit</Button>
    </form>
  
    </div>
  );
}
export default AddClient;
