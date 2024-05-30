// src/Book.js
import React from 'react';
import HTMLFlipBook from 'react-pageflip';

import Image1 from "../../assets/sigu.png"
import PatchImage from './PatchImage';

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
        <div className="page">
          <div className='flex justify-center my-12'>
            <PatchImage src={Image1} alt="Placeholder Image" style={{ width: 200, height: 200 }} />
          </div>
          <p className='font-bold'> WELCOME TO MY PORTFOLIO</p>
          <p className='text-sm mt-4'>This is page 2 of the book. Continue
            adding content as needed.This is page 2 of the book.
            Continue adding content as needed.This is page 2 of the book.
            Continue adding content as needed.
            Continue adding content as needed.This is page 2 of the book.
            Continue adding content as needed.
          </p>
        </div>
        <div className="page">This is page 2 of the book. Continue adding content as needed.</div>
        <div className="page">This is page 3 of the book.</div>
        <div className="page">This is page 4 of the book.</div>
      </HTMLFlipBook>
    </div>
  );
};

export default Book;
