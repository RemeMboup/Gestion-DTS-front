import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateClient } from '../../features/data/dataSliceClient';
import { useNavigate, useParams } from 'react-router-dom';
import { Label, TextInput, Button} from "flowbite-react";

const EditClient = () => {
  const { clientId } = useParams();
 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const client = useSelector(state => state.data.items.find(c => c._id === clientId));
  console.log({client});
  const [formData, setFormData] = useState({ nom: '', adresse: '', email: '', telephone: '' });

  useEffect(() => {
    if (client) {
      setFormData({ nom: client.nom, adresse: client.adresse, email: client.email, telephone: client.telephone });
    }
  }, [client]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateClient({ clientId, updatedClient: formData })).then(() => navigate('/clientList'));
  };

  return (
    <div className="modal">
      <h2>Edit Client</h2>
      {/* <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
        </label>
        <label>
          Adresse:
          <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Téléphone:
          <input type="text"  pattern="[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}" name="telephone" value={formData.telephone} onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate('/clientList')}>Cancel</button>
      </form> */}
      <form  onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="nom" value="Your Name" />
        </div>
        <TextInput type='text' id="nom"  placeholder="Mareme Mboup" name="nom" value={formData.nom} onChange={handleChange} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="adresse" value="Your Address" />
        </div>
        <TextInput id="adresse"  placeholder="Almadies 2" name="adresse" value={formData.adresse} onChange={handleChange} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="telephone" value="Phone number (77-123-90-90)" />
        </div>
        <TextInput id="telephone"  type="text" pattern="[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}" name="phone" value={formData.telephone} onChange={handleChange} required />
      </div>

      <Button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Submit</Button>
    </form>
    </div>
  );
};

export default EditClient;
