import React ,{useState} from 'react';
import CelebrityList from './components/CelebrityList';
import data from './data/celebrities.json'
import './App.css';
import SearchBar from './components/SearchBar';

function App() {

  const [celeb,setCeleb] = useState(data);
  const [searchTerm,setsearchTerm] = useState('');

  const handleSearch = (term) =>{
    setsearchTerm(term);
  }
 
  const handleUpdate = (updatedceleb) =>{
    setCeleb((prevCeleb) => 
      prevCeleb.map((celeb) =>
        celeb.id === updatedceleb.id? updatedceleb:celeb
    )
    )
  }
  const handleDelete = (id) =>{
    setCeleb((prevCeleb) => 
      prevCeleb.filter((celeb) =>
        celeb.id !== id
    )
    )
  }

const filteredCeleb = celeb.filter(
(celeb) => celeb.first.toLowerCase().includes(searchTerm.toLowerCase()) || celeb.last.toLowerCase().includes(searchTerm.toLowerCase()) 
)


  return (
    <div className='App'>
      <h1>Celebrity Manager</h1>
      <SearchBar onSearch={handleSearch}/>

      <CelebrityList
      celeb={filteredCeleb}
      onUpdate={handleUpdate}
      onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
