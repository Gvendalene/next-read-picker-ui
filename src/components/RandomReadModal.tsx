
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Star, X, RefreshCw, CheckCircle, ArrowLeft } from 'lucide-react';
import { Book as BookType } from '@/utils/csvParser';

interface RandomReadModalProps {
  book: BookType | null;
  onClose: () => void;
  onPickAnother: () => void;
  onMarkAsStarted: () => void;
}

const RandomReadModal: React.FC<RandomReadModalProps> = ({
  book,
  onClose,
  onPickAnother,
  onMarkAsStarted
}) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-lg w-full animate-scale-in">
        <CardContent className="p-0">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-t-lg">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-2">🎲 Your Random Pick!</h3>
            <p className="text-purple-100">Time to start your next adventure</p>
          </div>

          {/* Book Details */}
          <div className="p-6">
            {/* Book Cover Placeholder */}
            <div className="w-32 h-48 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg mx-auto mb-6 flex items-center justify-center shadow-lg">
              <Book className="w-16 h-16 text-gray-400" />
            </div>
            
            {/* Book Info */}
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                {book.title}
              </h4>
              <p className="text-gray-600 mb-3">by {book.author}</p>
              
              {/* Rating and Pages */}
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span>{book.averageRating}</span>
                </div>
                {book.pages > 0 && (
                  <div className="flex items-center gap-1">
                    <Book className="w-4 h-4" />
                    <span>{book.pages} pages</span>
                  </div>
                )}
              </div>

              {/* Publisher and Year */}
              <div className="text-xs text-gray-400">
                {book.publisher && book.yearPublished && (
                  <span>{book.publisher} • {book.yearPublished}</span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                onClick={onMarkAsStarted}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                size="lg"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                ✅ Mark as Started
              </Button>
              
              <div className="flex gap-3">
                <Button 
                  onClick={onPickAnother}
                  variant="outline"
                  className="flex-1"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  🔁 Pick Another
                </Button>
                
                <Button 
                  onClick={onClose}
                  variant="outline"
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  ↩️ Back to Shelf
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RandomReadModal;
