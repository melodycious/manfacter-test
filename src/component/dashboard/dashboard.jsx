import React, { useState } from 'react'
import Progress from './progress/progress.jsx';
import ImageContainer from './imageContainer.jsx';
import Technologies from './technologies/technologies.jsx';
import Colors from './colors.jsx';
import QuantityCard from './quantityCard.jsx';
import FileUploader from './fileUploader.jsx'; 

const Dashboard = () => {

    const [selectedFile, setSelectedFile] = useState('model_sheet_tec.pdf');
    const [fileName, setFileName] = useState('part_v01.stl');

    const handleFileChange = (event) => {
            setSelectedFile(event.target.files[0].name);
         };

    const handleFileSelect = (fileName) => {
           setFileName(fileName);
         };
         

    const colors = [
        { name: 'White', hex: 'bg-slate-50' },
        { name: 'Black', hex: 'bg-black' },
        { name: 'Anthracite', hex: 'bg-gray-500' },
        { name: 'Blue', hex: 'bg-blue-500' },
        { name: 'Red', hex: 'bg-red-500' },
        { name: 'Green', hex: 'bg-green-500' },
        { name: 'Yellow', hex: 'bg-yellow-500' },
      ];


    return (
        <div className="container mx-auto p-2">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-4">
                      <div className="col-span-1 -ml-4">
                            <Progress />
                      </div>
                      <div className="col-span-3 ml-12">
                            <ImageContainer />
                            <div className="text-center text-xs">
                                <p className="text-gray-600 font-normal"><b>Size:</b> 124.9 x 199.5 x 385 mm</p>
                                <p className="text-gray-600 font-normal"><b>Volume:</b> 9.62 cm<sup>3</sup></p>
                            </div>
                        </div>
                    </div>
                        <FileUploader onFileSelect={handleFileSelect} />
            </div>
        
                    
            <div className="lg:col-span-1">
                    <div className="text-sm font-bold mb-1 text-blue-900">Select Production Technology</div>
                        <Technologies />
                        <div className="text-sm font-bold mb-4 mt-3 text-blue-900">Select Material</div>
                        <select className="bg-white p-2 text-sm rounded mb-4 border-2 w-full">
                            <option>ABS</option>
                            <option>PLA</option>
                        </select>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="text-sm font-bold mb-4 text-blue-900">Layer Height</div>
                                <select className="bg-white p-2 text-sm rounded mb-4 border-2 w-full">
                                <option>0.2mm</option>
                                <option>0.4mm</option>
                                </select>
                            </div>
                            <div>
                                <div className="text-sm font-bold mb-4 text-blue-900">Infill</div>
                                <select className="bg-white p-2 text-sm rounded mb-4 border-2 w-full">
                                <option>40%</option>
                                <option>50%</option>
                                </select>
                            </div>
                            </div>
                        <hr className="my-4 border-b border-gray-200" />

                        <div className="text-sm font-bold mb-4 text-blue-900">Post Production</div>
                        <select className="bg-white p-2 text-sm rounded mb-4 border-2 w-full">
                            <option>None</option>
                        </select>

                        <hr className="my-4 border-b border-gray-200" />

                        <div className="text-sm font-bold mb-4 text-blue-900">Quantity</div>
                        <QuantityCard fileName={fileName}/>
                    </div>

                <div className="lg:col-span-1">
                        <div className="text-sm font-bold mb-4 text-blue-900">Technical Specifications</div>
                        <div className="flex items-center justify-between">
                                <div className="text-start">
                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    className="hidden"
                                    id="fileInput"
                                />
                                <label
                                    htmlFor="fileInput"
                                    className="text-sm bg-white border-2 border-blue-600 text-blue-600 py-2 px-4 rounded cursor-pointer"                                 >
                                    Choose pdf
                                </label>
                                </div>
                                <div className="text-xs leading-5 bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20 dark:highlight-white/5">
                                <span className="text-gray-700 text-xs">{selectedFile}</span>
                                <span className="ml-2 text-blue-600 cursor-pointer font-mono text-sm">X</span>
                                </div>
                        </div>
                        <hr className="my-4 border-b border-gray-200" />

                        <Colors colors={colors} /> 
                        
                        <hr className="my-4 border-b border-gray-200" />

                        <div className="text-sm font-bold mt-4 text-blue-900">Resume</div>
                                <div className="grid grid-cols-2 gap-4 pt-3">
                                <div className="text-left">
                                    <div className="text-sm">Per part</div>
                                    <div className="text-sm">Quantity</div>
                                    <div className="text-sm">Total</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm">25.30€</div>
                                    <div className="text-sm">1</div>
                                    <div className="text-sm">25.30€</div>
                                </div>
                                </div>
                        <hr className="my-4 border-b border-gray-200" />     

                    </div>
                </div>
            </div>
    );
};

export default Dashboard;
