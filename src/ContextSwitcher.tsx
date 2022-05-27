import { useContext } from 'react';
import AppContext from './AppContext';

const newAppContext = { 
  lang:'pt-br', 
  theme:'blue', 
  auth:'on' 
}

const ContextSwitcher = () => {
  
  return <button>
           Alterar Contexto da Aplicação
         </button>
  
};

export default ContextSwitcher;