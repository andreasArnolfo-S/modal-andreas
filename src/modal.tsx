import * as React from "react";

interface ModalProps {
     isOpen: boolean;
     contentTitle: string;
     contentBody: string;
     success: boolean;
     user?: {
          firstName: string,
          lastName: string,
          startDate: string,
          city: string,
          department: string,
     },
     onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, contentBody, contentTitle, success, onClose, user }) => {
     return (
          <>
               <link href="https://cdn.jsdelivr.net/npm/daisyui@2.46.1/dist/full.css" rel="stylesheet" type="text/css" />
               <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css" rel="stylesheet" type="text/css" />

               {isOpen ?
                    <div className="fixed top-0 right-0 left-0 bottom-0 flex justify-center duration-200 ease-in-out bg-base-300">
                         <div className="modal-box w-11/12 max-w-6xl h-2/3 flex justify-center flex-col">
                              <h3 className="font-bold text-2xl text-center">{contentTitle}</h3>
                              <p className="py-4 text-center">{contentBody}</p>

                              <div className="avatar placeholder justify-center mb-15">
                                   <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                        <span className="text-xl">JL</span>
                                   </div>
                              </div>

                              <div className="stats shadow">

                                   <div className="stat">
                                        <div className="stat-title">First name</div>
                                        <div className="stat-value text-primary">{user?.firstName}</div>
                                   </div>

                                   <div className="stat">
                                        <div className="stat-title">Last name</div>
                                        <div className="stat-value text-secondary">{user?.lastName}</div>
                                   </div>

                                   <div className="stat">
                                        <div className="stat-title">Start date</div>
                                        <div className="stat-value text-accent">{user?.startDate}</div>
                                   </div>

                                   <div className="stat">
                                        <div className="stat-title">Department</div>
                                        <div className="stat-value text-warning">{user?.department}</div>
                                   </div>

                                   <div className="stat">
                                        <div className="stat-title">City</div>
                                        <div className="stat-value text-base-300">{user?.city}</div>
                                   </div>

                                   

                              </div>

                              <div className="modal-action justify-center">
                                   <button onClick={onClose} className="btn">Close</button>
                              </div>
                         </div>
                    </div> : null
               }
          </>
     );
}
