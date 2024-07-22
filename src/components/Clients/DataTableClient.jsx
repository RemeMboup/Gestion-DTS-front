// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchClients, addClient, updateClient, deleteClient } from '../../features/data/dataSliceClient';
// import { Table, Button, Modal, TextInput } from 'flowbite-react';
// import { useNavigate } from 'react-router-dom';

// const DataTableClient = () => {
//   const items = useSelector(state => state.data.items);
//   const dispatch = useDispatch();
//   const [showModal, setShowModal] = useState(false);
//   const [currentItem, setCurrentItem] = useState({ id: '', nom: '', adresse: '', email: '',telephone: ''  });
//   const [isEditing, setIsEditing] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(fetchClients());
//   }, [dispatch]);

//   const handleSave = () => {
//     if (isEditing) {
//       dispatch(updateClient({ id: currentItem.id, updatedItem: { nom: currentItem.nom, adresse: currentItem.adresse, email: currentItem.email, telephone: currentItem.telephone } }));
//     } else {
//       dispatch(addClient({ nom: currentItem.nom, adresse: currentItem.adresse, email: currentItem.email, telepho: currentItem.telephone}));
//     }
//     setShowModal(false);
//     setCurrentItem({ id: '', nom: '', adresse: '' , email: '',  telephone: ''});
//     setIsEditing(false);
//   };

//   const handleEdit = (item) => {
//     setCurrentItem(item);
//     setShowModal(true);
//     setIsEditing(true);
//   };

//   const handleAdd = () => {
//     setCurrentItem({ id: '', name: '' });
//     setShowModal(true);
//     setIsEditing(false);
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteClient(id));
//   };

//   return (
//     <>
//       <Button onClick={() => setShowModal(true)}>Add Item</Button>
//       <Table>
//         <Table.Head>
//           <Table.HeadCell>Nom</Table.HeadCell>
//           <Table.HeadCell>Adresse</Table.HeadCell>
//           <Table.HeadCell>Email</Table.HeadCell>
//           <Table.HeadCell>Telephone</Table.HeadCell>
//           <Table.HeadCell>Actions</Table.HeadCell>
//         </Table.Head>
//         <Table.Body>
//           {items.map(item => (
//             <Table.Row key={item.id}>
//               <Table.Cell>{item.nom}</Table.Cell>
//               <Table.Cell>{item.adresse}</Table.Cell>
//               <Table.Cell>{item.email}</Table.Cell>
//               <Table.Cell>{item.telephone}</Table.Cell>
//               <Table.Cell>
//                 <Button onClick={() => handleEdit(item)}>Edit</Button>
//                 <Button color="failure" onClick={() => handleDelete(item.id)}>Delete</Button>
//               </Table.Cell>
//             </Table.Row>
//           ))}
//         </Table.Body>
//       </Table>
//       <Modal show={showModal} onClose={() => setShowModal(false)}>
//         <Modal.Header>{isEditing ? 'Edit Item' : 'Add Item'}</Modal.Header>
//         <Modal.Body>
//           <TextInput
//             id="nom"
//             type="text"
//             placeholder="Nom"
//             value={currentItem.nom}
//             onChange={(e) => setCurrentItem({ ...currentItem, nom: e.target.value })}
//           />
//           <TextInput
//             id="adresse"
//             type="text"
//             placeholder="Adresse"
//             value={currentItem.adresse}
//             onChange={(e) => setCurrentItem({ ...currentItem, adresse: e.target.value })}
//           />
//           <TextInput
//             id="email"
//             type="text"
//             placeholder="email"
//             value={currentItem.email}
//             onChange={(e) => setCurrentItem({ ...currentItem, email: e.target.value })}
//           />
//           <TextInput
//             id="telephone"
//             type="text"
//             placeholder="Telephone"
//             value={currentItem.telephone}
//             onChange={(e) => setCurrentItem({ ...currentItem, telephone: e.target.value })}
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={handleSave}>Save</Button>
//           <Button color="failure" onClick={() => setShowModal(false)}>Cancel</Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default DataTableClient;
