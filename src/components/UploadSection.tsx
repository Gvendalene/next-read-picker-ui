
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, CheckCircle, FileText } from 'lucide-react';
import HowToExport from './HowToExport';

const UploadSection = () => {
  const [csvUploaded, setCsvUploaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/csv') {
      setCsvUploaded(true);
      console.log('CSV file uploaded:', file.name);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type === 'text/csv') {
      setCsvUploaded(true);
      console.log('CSV file uploaded:', files[0].name);
    }
  };

  return (
    <div className="max-w-lg mx-auto space-y-8">
      {/* Dynamic Upload Area */}
      <div 
        className={`relative transition-all duration-300 ${
          isDragOver ? 'scale-105' : 'scale-100'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          id="csv-upload"
        />
        
        <div className={`
          relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300
          ${isDragOver 
            ? 'border-blue-500 bg-blue-50 shadow-lg' 
            : csvUploaded 
              ? 'border-green-400 bg-green-50' 
              : 'border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50'
          }
        `}>
          <div className="space-y-4">
            {csvUploaded ? (
              <div className="animate-fade-in">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto animate-scale-in" />
                <h3 className="text-lg font-semibold text-green-700">File Uploaded!</h3>
                <p className="text-green-600">Your TBR is ready to explore</p>
              </div>
            ) : (
              <div className="animate-fade-in">
                <Upload className={`w-12 h-12 mx-auto transition-all duration-300 ${
                  isDragOver ? 'text-blue-500 scale-110' : 'text-gray-400'
                }`} />
                <h3 className="text-lg font-semibold text-gray-700">
                  {isDragOver ? 'Drop your CSV here!' : 'Upload Your Goodreads TBR'}
                </h3>
                <p className="text-gray-500">
                  Drag & drop your CSV file or click to browse
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Help Link with Icon */}
      <div className="text-center">
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline text-sm transition-all duration-200 hover:gap-3"
        >
          <FileText className="w-4 h-4" />
          How to export from Goodreads
        </button>
      </div>

      {/* Continue Button with Enhanced Animation */}
      <Button
        size="lg"
        className={`w-full py-4 px-8 text-lg font-medium transition-all duration-300 ${
          csvUploaded
            ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transform hover:scale-105 shadow-lg hover:shadow-xl'
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
        disabled={!csvUploaded}
      >
        {csvUploaded ? '🚀 Continue to My Shelf' : '📚 Continue to My Shelf'}
      </Button>

      {/* Success Message with Animation */}
      {csvUploaded && (
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
            <CheckCircle className="w-4 h-4" />
            <span className="font-medium">Ready to discover your next read!</span>
          </div>
        </div>
      )}

      <HowToExport isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default UploadSection;
