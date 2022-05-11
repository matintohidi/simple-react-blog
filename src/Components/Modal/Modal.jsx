import React from 'react';

const Modal = () => {
    return (
        <>  
            <div id="small-modal" tabIndex="-1" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex justify-between items-center p-5 rounded-t">
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="small-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <p className="text-base leading-relaxed">
                                To search for tags, you must separate tags with " - "
                            </p>
                            <p className="text-base leading-relaxed">
                                For example : <span className="text-mainColor">Foods-Programming-Games-Bitcoin</span>
                            </p>
                        </div>
                        <div className="flex items-center justify-center p-6 space-x-2 rounded-b border-t border-gray-200">
                            <button data-modal-toggle="small-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal