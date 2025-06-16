
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Shuffle, Book, Star, Calendar } from 'lucide-react';
import { Book as BookType } from '@/utils/csvParser';

// Mock data for now - in real app this would come from props or context
const mockBooks: BookType[] = [
  {
    id: '1',
    title: 'The Travelling Cat Chronicles',
    author: 'Hiro Arikawa',
    averageRating: 4.33,
    dateAdded: '2025/06/13',
    bookshelf: 'to-read',
    pages: 281,
    yearPublished: 2018,
    publisher: 'Viking'
  },
  {
    id: '2',
    title: 'Demon Copperhead',
    author: 'Barbara Kingsolver',
    averageRating: 4.48,
    dateAdded: '2025/06/11',
    bookshelf: 'to-read',
    pages: 560,
    yearPublished: 2022,
    publisher: 'Harper'
  },
  {
    id: '3',
    title: 'Simon Says',
    author: 'Lilou Wimbee',
    averageRating: 4.29,
    dateAdded: '2025/06/11',
    bookshelf: 'to-read',
    pages: 375,
    yearPublished: 2025,
    publisher: 'SOLLEYRE'
  }
];

const Shelf = () => {
  const [books] = useState<BookType[]>(mockBooks);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('title');
  const [randomBook, setRandomBook] = useState<BookType | null>(null);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case 'title':
        return a.title.localeCompare(b.title);
      case 'author':
        return a.author.localeCompare(b.author);
      case 'rating':
        return b.averageRating - a.averageRating;
      case 'date':
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      default:
        return 0;
    }
  });

  const handleRandomRead = () => {
    const randomIndex = Math.floor(Math.random() * books.length);
    setRandomBook(books[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My TBR Shelf</h1>
          <p className="text-gray-600">{books.length} books waiting to be discovered</p>
        </div>

        {/* Controls */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Sort */}
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="title">Title</SelectItem>
              <SelectItem value="author">Author</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="date">Date Added</SelectItem>
            </SelectContent>
          </Select>

          {/* Random Read Button */}
          <Button
            onClick={handleRandomRead}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
          >
            <Shuffle className="w-4 h-4 mr-2" />
            🎲 Random Read
          </Button>
        </div>

        {/* Random Book Modal */}
        {randomBook && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-md w-full animate-scale-in">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">🎲 Your Random Pick!</h3>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-lg mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">{randomBook.title}</h4>
                  <p className="text-gray-600">by {randomBook.author}</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm">{randomBook.averageRating}</span>
                  </div>
                </div>
                <Button 
                  onClick={() => setRandomBook(null)}
                  className="w-full"
                >
                  Close
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Books Grid */}
        <ScrollArea className="h-[calc(100vh-400px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedBooks.map((book) => (
              <Card key={book.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-4">
                  {/* Book Cover Placeholder */}
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg mb-4 flex items-center justify-center">
                    <Book className="w-12 h-12 text-gray-400" />
                  </div>
                  
                  {/* Book Info */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-800 line-clamp-2 leading-tight">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600">{book.author}</p>
                    
                    {/* Rating and Date */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        <span>{book.averageRating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(book.dateAdded).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {sortedBooks.length === 0 && (
            <div className="text-center py-12">
              <Book className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No books found matching your search.</p>
            </div>
          )}
        </ScrollArea>
      </div>
    </div>
  );
};

export default Shelf;
