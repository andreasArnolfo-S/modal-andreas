import React from 'react';
import { Modal } from './lib/modal';
import { useState } from 'react';
import { CopyBlock, dracula } from "react-code-blocks";

const App = () => {
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [modalType, setModalType] = useState("default");
     const [modalSuccess, setModalSuccess] = useState(true);

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
                    onClose={handleClose}
                    success={modalSuccess}
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
                    <button data-test-id='default-button' style={{ backgroundColor: '#15eda1', borderRadius: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none', width: '250px', marginTop: '10px' }} onClick={() => {setModalType("default"); setIsModalOpen(true); setModalSuccess(true)}}>Modal</button>
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
                    <button style={{ backgroundColor: '#15eda1', width: '250px', borderRadius: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none', marginTop: '10px' }} onClick={() => {setModalType("componentInside"); setIsModalOpen(true); setModalSuccess(true)}}>Modal with component inside</button>
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
                    <button style={{ backgroundColor: '#15eda1', width: '250px', borderRadius: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none', marginTop: '10px' }} onClick={() => {setModalType("confirmation"); setIsModalOpen(true); setModalSuccess(true)}}>Modal with confirmation</button>
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
                    <button style={{ backgroundColor: '#15eda1', width: '250px', borderRadius: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none', marginTop: '10px' }} onClick={() => {setModalType("formulaire"); setIsModalOpen(true); setModalSuccess(true)}}>Modal with formulaire</button>
               </section>

               <section className="error">
                    <h3>Modal with error :</h3>
                    <CopyBlock
                         text={`<Modal
                         isOpen={isModalOpen}
                         contentTitle={'String'}
                         contentBody={'String'}
                         success={false}
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
                    <button style={{ backgroundColor: '#15eda1', width: '250px', borderRadius: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none', marginTop: '10px' }} onClick={() => {setModalType("error"); setIsModalOpen(true); setModalSuccess(false)}}>Modal with error</button>
               </section>
          </div>
     )
}
export default App;