
import Papa from 'papaparse';

export interface Book {
  id: string;
  title: string;
  author: string;
  additionalAuthors?: string;
  isbn?: string;
  isbn13?: string;
  averageRating: number;
  publisher?: string;
  pages?: number;
  yearPublished?: number;
  dateAdded: string;
  bookshelf: string;
}

export const parseGoodreadsCSV = (file: File): Promise<Book[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const books: Book[] = results.data.map((row: any) => ({
            id: row['Book Id'] || '',
            title: row['Title'] || '',
            author: row['Author'] || '',
            additionalAuthors: row['Additional Authors'] || '',
            isbn: row['ISBN']?.replace(/[="]/g, '') || '',
            isbn13: row['ISBN13']?.replace(/[="]/g, '') || '',
            averageRating: parseFloat(row['Average Rating']) || 0,
            publisher: row['Publisher'] || '',
            pages: parseInt(row['Number of Pages']) || 0,
            yearPublished: parseInt(row['Year Published']) || 0,
            dateAdded: row['Date Added'] || '',
            bookshelf: row['Exclusive Shelf'] || 'to-read'
          }));
          
          console.log(`Parsed ${books.length} books from CSV`);
          resolve(books);
        } catch (error) {
          reject(new Error('Failed to parse CSV file'));
        }
      },
      error: (error) => {
        reject(new Error(`CSV parsing error: ${error.message}`));
      }
    });
  });
};
