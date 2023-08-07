"use client";
import React, { useState } from 'react';
import styles from '@/styles/music.module.css';
import { db, storage } from '@/firebase/config';
import { BsFolder, BsYoutube } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Page() {
  const [showYoutubeForm, setShowYoutubeForm] = useState(false);
  const [showLocalFileForm, setShowLocalFileForm] = useState(false);
  const [musicName, setMusicName] = useState('');
  const [artist, setArtist] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false); // For showing upload message

  const handleYoutubeOptionClick = () => {
    setShowYoutubeForm(true);
    setShowLocalFileForm(false);
  };

  const handleLocalFileOptionClick = () => {
    setShowYoutubeForm(false);
    setShowLocalFileForm(true);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleLocalFileSubmit = async (event) => {
    event.preventDefault();

    if (!musicName || !artist || !selectedFile) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Fields',
        text: 'Please fill in all required fields.',
      });
      return;
    }

    try {
      setUploading(true); // Show uploading message

      // Upload the file to Firebase Storage
      const storageRef = ref(storage, `music/${selectedFile.name}`);
      await uploadBytes(storageRef, selectedFile);

      // Get the download URL from Firebase Storage
      const url = await getDownloadURL(storageRef);

      // Add the music details to Firestore
      const musicCollectionRef = collection(db, "Musics");
      await addDoc(musicCollectionRef, {
        name: musicName,
        artist: artist,
        url: url, // Store the download URL
        source: "Local Music",
      });

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Music uploaded successfully.',
      });

      // Clear the form
      setMusicName('');
      setArtist('');
      setSelectedFile(null);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      });
    } finally {
      setUploading(false); // Hide uploading message
    }
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
            <button disabled style={{ cursor: 'not-allowed' }}>Save</button>
          </form>
        )}
        {showLocalFileForm && (
          <form onSubmit={handleLocalFileSubmit}>
            <label htmlFor="Name">Enter Name Of Your Music*</label>
            <input
              type="text"
              placeholder='Beauty And A Beat (Official Music Video) ft. Nicki Minaj'
              value={musicName}
              onChange={(e) => setMusicName(e.target.value)}
              required
            />
            <label htmlFor="Artist">Enter Artist Name*</label>
            <input
              type="text"
              placeholder='Justin Bieber'
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              required
            />
            <label htmlFor="Source">Source*</label>
            <input
              type="text"
              value="Local Music"
              readOnly
            />
            <label htmlFor="File">Upload Your MP3 File*</label>
            <input
              type="file"
              required
              accept=".mp3"
              onChange={handleFileChange}
            />
            {uploading ? <button type="submit" disabled style={{ cursor: 'not-allowed' }}>Uploading...</button> : <button type="submit">Save</button>}
            
          </form>
        )}
      </section>
    </>
  );
}