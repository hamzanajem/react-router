
import './App.css';
import { Booksprovider } from './context/Booksprovider';
import Books from './components/Books';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';
import SecretBookList from './components/SecretBookList';
import { PrivateRoute } from './components/PrivateRoute';


function App() {
  return (

    <Booksprovider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Books />} />
          <Route path='/books' element={<Navigate to='/' />} />
          <Route path='/books/:bookId' element={<BookDetails />} />
          <Route path='*' element={<Books />} />
          <Route path='/secret' element={<PrivateRoute Componet={<SecretBookList />} />} />
        </Routes>
      </BrowserRouter>
    </Booksprovider>

  );
}

export default App;
