// src/Book.js
import React from 'react';
import HTMLFlipBook from 'react-pageflip';

const Book = () => {
  return (
    <div className='book-container'>
      <HTMLFlipBook
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={420}
        maxHeight={1350}
        maxShadowOpacity={0.5}
        showCover={true}
      >
        <div className="book-cover pt-10">
          <p>The Journey</p>
          <p>By Sigu</p>
        </div>
        <div className="page">This is page 1 of the book. You can add text, images, and other content here to make it look like a real book page.</div>
        <div className="page">This is page 2 of the book. Continue adding content as needed.</div>
        <div className="page">This is page 3 of the book.</div>
        <div className="page">This is page 4 of the book.</div>
      </HTMLFlipBook>
    </div>
  );
};

export default Book;
