import * as React from "react";

interface ModalProps {
     isOpen: boolean;
     contentTitle: string;
     contentBody: string;
     success?: boolean;
     modalSize: string;
     styleGlass?: boolean;
     onClose: () => void;
     btnLabel?: string;
     btnColor?: string;
     children?: React.ReactNode;
     isClosable?: boolean;
     type?: string;
}


export const Modal: React.FC<ModalProps> = ({ isOpen, isClosable, contentBody, type, contentTitle, success, onClose, modalSize, styleGlass, btnColor, btnLabel, children }) => {
     React.useEffect(() => {
          const handleKeyDown = (event: KeyboardEvent) => {
               if (event.key === 'Escape' && isClosable) {
                    onClose();
               }
          };
          window.addEventListener('keydown', handleKeyDown);
          return () => {
               window.removeEventListener('keydown', handleKeyDown);
          };
     }, [isClosable, onClose]);


     return (
          <>

               {isOpen ?
                    <div data-test-id='modal' style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10000}}>
                         <div style={{ width: `${modalSize}`, backgroundColor: `${success ? '#fff' : '#deaeab'}`, borderRadius: '0.5rem', boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)', padding: '1rem', zIndex: 10, position: 'relative', }}>
                              <h3 style={{ fontWeight: 700, fontSize: '1.5rem', lineHeight: '2rem', textAlign: 'center', }}>
                                   {contentTitle}
                              </h3>
                              <p style={{ paddingTop: '1rem', paddingBottom: '1rem', textAlign: 'center', }}>
                                   {contentBody}
                              </p>
                              {type === 'componentInside' ? <div style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                                   {children}
                              </div> : null}
                              {isClosable ?
                                   <div className="closeTopRight" style={{ position: 'absolute', top: '-0.5rem', right: '-0.6rem', zIndex: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <button data-testid="closeButton" onClick={onClose} style={{backgroundColor: `${btnColor}`,border: 'none',cursor: 'pointer',fontSize: '1rem',width: 30,height: 30,textAlign: 'center',color: '#fff',borderRadius: '50%',}}>
                                             x
                                        </button>
                                   </div> : null}
                              {type === 'confirmation' ? <div style={{display: 'flex', justifyContent: 'center', gap: '2%'}}>
                                   <button data-testid='okcButton' style={{backgroundColor: 'green', borderRadius: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none'}}>Ok</button>
                                   <button data-testid='cancelButton' style={{backgroundColor: 'gray', borderRadius: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none'}}>Cancel</button>
                              </div> : null}

                              {type === 'formulaire' ? 
                              //form
                              <form style={{display: 'flex', flexDirection: 'column', gap: '2%', marginBottom: '15px'}}>
                                   <label htmlFor="Nom">Nom</label>
                                   <input type="text" placeholder="Nom" style={{padding: '10px 20px', borderRadius: '5px', border: 'none', fontSize: '16px'}}/>
                                   <label htmlFor="Prénom">Prénom</label>
                                   <input type="text" placeholder="Prénom" style={{padding: '10px 20px', borderRadius: '5px', border: 'none', fontSize: '16px'}}/>
                                   <label htmlFor="Email">Email</label>
                                   <input type="text" placeholder="Email" style={{padding: '10px 20px', borderRadius: '5px', border: 'none', fontSize: '16px'}}/>
                                   <label htmlFor="Téléphone">Téléphone</label>
                                   <input type="text" placeholder="Téléphone" style={{padding: '10px 20px', borderRadius: '5px', border: 'none', fontSize: '16px'}}/>
                                   <button style={{backgroundColor: 'green', borderRadius: '5px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: 'none', marginTop: '15px'}}>Ok</button>
                              </form> : null}
                         </div>
                    </div> : null
               }
          </>
     );
}
