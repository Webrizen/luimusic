"use client";
import React, { useState } from 'react';
import styles from '@/styles/music.module.css';
import { BsFolder, BsYoutube } from 'react-icons/bs';

export default function Page() {
  const [showYoutubeForm, setShowYoutubeForm] = useState(false);
  const [showLocalFileForm, setShowLocalFileForm] = useState(false);

  const handleYoutubeOptionClick = () => {
    setShowYoutubeForm(true);
    setShowLocalFileForm(false);
  };

  const handleLocalFileOptionClick = () => {
    setShowYoutubeForm(false);
    setShowLocalFileForm(true);
  };

  return (
    <>
      <section className={styles.Music}>
        <h1>Create Music & PlayLists</h1>
        <div className={styles.TwoCol}>
          <div className={styles.Option} onClick={handleYoutubeOptionClick}>
            <BsYoutube />
            <h2>YouTube</h2>
          </div>
          <div className={styles.Option} onClick={handleLocalFileOptionClick}>
            <BsFolder />
            <h2>Local File</h2>
          </div>
        </div>
        {showYoutubeForm && (
          <form>
            <label htmlFor="URL">Enter Your YouTube Music Video URL*</label>
            <input type="url" placeholder="example: https://youtube.com/your-video" required />
            <button>Save</button>
          </form>
        )}
        {showLocalFileForm && (
          <form>
            <label htmlFor="Name">Enter Name Of Your Music*</label>
            <input type="text" placeholder='Beauty And A Beat (Official Music Video) ft. Nicki Minaj' />
            <label htmlFor="Artist">Enter Artist Name*</label>
            <input type="text" placeholder='Justin Bieber' />
            <label htmlFor="Source">Source*</label>
            <input type="text" value="Local Music" readOnly />
            <label htmlFor="File">Upload Your MP3 File*</label>
            <input type="file" required accept=".mp3" />
            <button>Save</button>
          </form>
        )}
      </section>
    </>
  );
}