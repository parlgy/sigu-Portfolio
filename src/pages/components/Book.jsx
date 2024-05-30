// src/Book.js
import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import styled from 'styled-components';
import coverImage from '../../assets/images/cover.jpg'; // Add a cover image for realism
import pageTexture from '../../assets/images/pageTexture.svg'; // Add a texture for pages

const BookContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0e5d8;
`;

const BookCover = styled.div`
  background-image: url(${coverImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2em;
  font-weight: bold;
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${pageTexture});
  background-size: cover;
  border: 1px solid #ccc;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  font-size: 1.5em;
  line-height: 1.6;
`;

const Book = () => {
  return (
    <BookContainer>
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
        <BookCover className="page pt-20">
          <p>The Journey</p>
          <p>By Sigu</p>
        </BookCover>
        <Page className="page">This is page 1 of the book. You can add text, images, and other content here to make it look like a real book page.</Page>
        <Page className="page">This is page 2 of the book. Continue adding content as needed.</Page>
        <Page className="page">This is page 3 of the book.</Page>
        <Page className="page">This is page 4 of the book.</Page>
      </HTMLFlipBook>
    </BookContainer>
  );
};

export default Book;
