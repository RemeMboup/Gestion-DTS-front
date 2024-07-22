// import React from 'react';
// import DataTableClient from '../Clients/DataTableClient';

// const ClientList = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">My Data Table</h1>
//       <DataTableClient />
//     </div>
//   );
// };

// export default ClientList;

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchClients, deleteClient } from '../../features/data/dataSliceClient'
import { Link, useNavigate } from 'react-router-dom';

const ClientList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Ca permet de recuperer la listes des client depuis le store
  const clients = useSelector(state => state.data.items);
  const status = useSelector(state => state.data.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchClients());
    }
  }, [status, dispatch]);

  const handleDelete = (clientId) => {
    dispatch(deleteClient(clientId));
  };

  return (
    <div>
      <h1>Clients</h1>
      <button onClick={() => navigate('/clients/add')}>Add Client</button>
      {/* <ul>
        {clients.map(client => (
          <li key={client.id}>
            {client.nom} {client.adresse} {client.email} {client.telephone}<Link to={`/clients/edit/${client.id}`}>Edit</Link> <button onClick={() => handleDelete(client.id)}>Delete</button>
          </li>
        ))}
      </ul> */}
      <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Adresse</th>
                <th>Telephone</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>{clients.map((client) => (
            <tr key = {client._id}>
                <td>{client.nom}</td>
                <td>{client.adresse}</td>
                <td>{client.telephone}</td>
                <td>{client.email}</td>
                <td><Link to={`/clients/edit/${client._id}`}>Edit</Link> <button onClick={() => handleDelete(client._id)}>Delete</button></td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
