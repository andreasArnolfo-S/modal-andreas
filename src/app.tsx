import { Modal } from './modal';
import { useState } from 'react';
import { CopyBlock, dracula } from "react-code-blocks";

const App = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [modalType, setModalType] = useState("default");

     const handleClick = (type: string) => {
          setIsModalOpen(true);
          setModalType(type);
     };
     const handleClose = () => {
          setIsModalOpen(false);
     };
     return (
          <div style={{
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',
          }}>
               <h1 style={{ textAlign: 'center' }}>Modal-andreas demo</h1>
               <Modal
                    isOpen={isModalOpen}
                    contentTitle={'ContentTitle'}
                    contentBody={'contentBody'}
                    success={true}
                    onClose={handleClose}
                    modalSize={'600px'}
                    styleGlass={true}
                    btnColor={'green'}
                    isClosable={true}
                    type={modalType}
               >
                    <p>Component here</p>

               </Modal>

               <section className="default">
                    <h3>Default modal :</h3>
                    <CopyBlock 
                         text={`<Modal 
                         isOpen={isModalOpen} 
                         contentTitle={'String'} 
                         contentBody={'String'} 
                         onClose={handleClose} 
                         modalSize={'600px'} 
                         isClosable={true} 
                         type={'default'} 
                         />`}
                         
                         language="jsx"
                         showLineNumbers={true}
                         startingLineNumber={1}
                         theme={dracula}
                         warpLines={true}
                         codeBlock
                    />
                    <button style={{ backgroundColor: '#15eda1', borderRadius: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none', width: '250px', marginTop: '10px' }} onClick={() => handleClick("default")}>Modal</button>
               </section>

               <section className="componentinside">
                    <h3>Modal with component inside :</h3>
                    <CopyBlock 
                         text={`<Modal 
                         isOpen={isModalOpen} 
                         contentTitle={'String'} 
                         contentBody={'String'} 
                         onClose={handleClose} 
                         modalSize={'600px'} 
                         isClosable={true} 
                         type={'componentInside'} 
                         >
                         <MyComponent />
                         </Modal>`}
                         
                         language="jsx"
                         showLineNumbers={true}
                         startingLineNumber={1}
                         theme={dracula}
                         warpLines={true}
                         codeBlock
                    />
                    <button style={{ backgroundColor: '#15eda1', width: '250px', borderRadius: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none', marginTop: '10px' }} onClick={() => handleClick("componentInside")}>Modal with component inside</button>
               </section>

               <section className="confirmation">
                    <h3>Modal with confirmation :</h3>
                    <CopyBlock 
                         text={`<Modal 
                         isOpen={isModalOpen} 
                         contentTitle={'String'} 
                         contentBody={'String'} 
                         onClose={handleClose} 
                         modalSize={'600px'} 
                         isClosable={true} 
                         btnColor={'green'}
                         isClosable={true}
                         type={'confirmation'} 
                         />`}
                         
                         language="jsx"
                         showLineNumbers={true}
                         startingLineNumber={1}
                         theme={dracula}
                         warpLines={true}
                         codeBlock
                    />
                    <button style={{ backgroundColor: '#15eda1', width: '250px', borderRadius: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none', marginTop: '10px' }} onClick={() => handleClick("confirmation")}>Modal with confirmation</button>
               </section>

               <section className="formulaire">
                    <h3>Modal with formulaire :</h3>
                    <CopyBlock 
                         text={`<Modal 
                         isOpen={isModalOpen} 
                         contentTitle={'String'} 
                         contentBody={'String'} 
                         onClose={handleClose} 
                         modalSize={'600px'} 
                         isClosable={true} 
                         btnColor={'green'}
                         isClosable={true}
                         type={'formulaire'} 
                         />`}
                         
                         language="jsx"
                         showLineNumbers={true}
                         startingLineNumber={1}
                         theme={dracula}
                         warpLines={true}
                         codeBlock
                    />
                    <button style={{ backgroundColor: '#15eda1', width: '250px', borderRadius: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none' }} onClick={() => handleClick("formulaire")}>Modal with formulaire</button>
               </section>
          </div>
     )
}
export default App;