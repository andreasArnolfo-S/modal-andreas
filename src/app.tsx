import { Modal } from './modal';
import { useState } from 'react';

const App = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);


     const handleClose = () => {
          setIsModalOpen(false);
     };
     return (
          <Modal
               isOpen={true}
               contentTitle={'ContentTitle'}
               contentBody={'contentBody'}
               success={true}
               onClose={handleClose}
               modalSize={'h-2/3'}
               styleGlass= {true}
          />
     )
}
export default App;