
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface HowToExportProps {
  isOpen: boolean;
  onClose: () => void;
}

const HowToExport = ({ isOpen, onClose }: HowToExportProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-800">
            How to Export from Goodreads
          </DialogTitle>
          <DialogDescription asChild>
            <div className="text-gray-600 space-y-4 mt-4">
              <div className="space-y-2">
                <p className="font-medium">Step 1:</p>
                <p>Go to your Goodreads account and click on "My Books"</p>
              </div>
              
              <div className="space-y-2">
                <p className="font-medium">Step 2:</p>
                <p>Click on "Tools" in the left sidebar</p>
              </div>
              
              <div className="space-y-2">
                <p className="font-medium">Step 3:</p>
                <p>Click "Export Library" and download your CSV file</p>
              </div>
              
              <div className="space-y-2">
                <p className="font-medium">Step 4:</p>
                <p>Upload the CSV file here to get started!</p>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-800">
                  💡 <strong>Tip:</strong> The export might take a few minutes if you have a large library.
                </p>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default HowToExport;
