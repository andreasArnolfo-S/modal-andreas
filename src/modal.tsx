import * as React from "react";

interface ModalProps {
     isOpen: boolean;
     contentTitle: string;
     contentBody: string;
     success: boolean;
     modalSize: string;
     styleGlass?: boolean;
     onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, contentBody, contentTitle, success, onClose, modalSize, styleGlass }) => {
     return (
          <>
               <link href="https://cdn.jsdelivr.net/npm/daisyui@2.46.1/dist/full.css" rel="stylesheet" type="text/css" />
               <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css" rel="stylesheet" type="text/css" />

               {isOpen ?
                    <div className="fixed top-0 right-0 left-0 bottom-0 flex justify-center duration-200 ease-in-out bg-base-300">
                         <div className={`modal-box w-11/12 max-w-6xl ${modalSize} flex justify-center flex-col ${styleGlass ? 'glass' : null}`}>
                              <h3 className="font-bold text-2xl text-center">{contentTitle}</h3>
                              <p className="py-4 text-center">{contentBody}</p>

                              <div className="modal-action justify-center">
                                   <button onClick={onClose} className="btn">Close</button>
                              </div>
                         </div>
                    </div> : null
               }
          </>
     );
}
