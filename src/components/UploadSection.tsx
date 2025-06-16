
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { upload } from 'lucide-react';
import HowToExport from './HowToExport';

const UploadSection = () => {
  const [csvUploaded, setCsvUploaded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/csv') {
      setCsvUploaded(true);
      console.log('CSV file uploaded:', file.name);
      // Here you would typically process the CSV file
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <div className="relative">
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          id="csv-upload"
        />
        <Button
          asChild
          size="lg"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 text-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg"
        >
          <label htmlFor="csv-upload" className="cursor-pointer flex items-center justify-center gap-3">
            <upload className="w-5 h-5" />
            Import My Goodreads TBR (.CSV)
          </label>
        </Button>
      </div>

      <div className="text-center">
        <button
          onClick={() => setShowModal(true)}
          className="text-blue-600 hover:text-blue-800 underline text-sm transition-colors"
        >
          How to export from Goodreads
        </button>
      </div>

      <Button
        size="lg"
        variant="secondary"
        className={`w-full py-4 px-8 text-lg font-medium transition-all duration-200 ${
          csvUploaded
            ? 'bg-green-600 hover:bg-green-700 text-white hover:scale-105 shadow-lg'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        disabled={!csvUploaded}
      >
        Continue to My Shelf
      </Button>

      {csvUploaded && (
        <div className="text-center">
          <p className="text-green-600 font-medium">✓ CSV uploaded successfully!</p>
        </div>
      )}

      <HowToExport isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default UploadSection;
