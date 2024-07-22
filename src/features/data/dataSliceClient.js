// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const API_URL = 'http://localhost:8000/clients'; 

// export const fetchClients = createAsyncThunk('data/fetchClients', async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// });

// export const addClient = createAsyncThunk('data/addClient', async (newClient) => {
//   const response = await axios.post(API_URL, newClient);
//   return response.data;
// });

// export const updateClient = createAsyncThunk('data/updateClient', async ({ id, updateClient }) => {
//   const response = await axios.put(`http://localhost:8000/clients/${id}`, updateClient);
//   return response.data;
// });

// export const deleteClient = createAsyncThunk('data/deleteClient', async (id) => {
//   await axios.delete(`${API_URL}/${id}`);
//   return id;
// });

// const dataSliceClient = createSlice({
//   name: 'data',
//   initialState: {
//     items: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchClients.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchClients.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(fetchClients.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       })
//       .addCase(addClient.fulfilled, (state, action) => {
//         state.items.push(action.payload);
//       })
//       .addCase(updateClient.fulfilled, (state, action) => {
//         const index = state.items.findIndex(item => item.id === action.payload.id);
//         state.items[index] = action.payload;
//       })
//       .addCase(deleteClient.fulfilled, (state, action) => {
//         state.items = state.items.filter(item => item.id !== action.payload);
//       });
//   },
// });

// export default dataSliceClient.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8000/clients';

// Thunk pour récupérer les clients
export const fetchClients = createAsyncThunk('clients/fetchClients', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Thunk pour ajouter un client
export const addClient = createAsyncThunk('clients/addClient', async (newClient) => {
  const response = await axios.post(API_URL, newClient);
  return response.data;
});

// Thunk pour mettre à jour un client
export const updateClient = createAsyncThunk('clients/updateClient', async ({ clientId, updatedClient }) => {
  const response = await axios.put(`${API_URL}/${clientId}`, updatedClient);
  return response.data;
});

// Thunk pour supprimer un client
export const deleteClient = createAsyncThunk('clients/deleteClient', async (clientId) => {
  await axios.delete(`${API_URL}/${clientId}`);
  return clientId;
});

const clientsSlice = createSlice({
  name: 'clients',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addClient.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateClient.fulfilled, (state, action) => {
        const index = state.items.findIndex(client => client._id === action.payload._id);
        state.items[index] = action.payload;
      })
      .addCase(deleteClient.fulfilled, (state, action) => {
        state.items = state.items.filter(client => client._id !== action.payload);
      });
  },
});

export default clientsSlice.reducer;
