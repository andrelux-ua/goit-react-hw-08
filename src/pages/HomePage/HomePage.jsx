import React, { useRef, useEffect } from 'react';
import image from '../../assets/images/phonebook-n.png';
import audio from '../../assets/images/carleton-opus.mp3';

const HomePage = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
      } catch (err) {
        console.warn(
          'Автозапуск не вдався: браузер блокує автоплей без взаємодії'
        );
      }
    };

    playAudio();
  }, []);

  return (
    <div style={{ textAlign: 'center', color: '#fff' }}>
      <h2>Welcome to the Phonebook App</h2>
      <p>Please register or log in to manage your contacts.</p>
      <img
        src={image}
        alt="image phonebook"
        width="150px"
        style={{ marginTop: '10px' }}
      />
      <audio
        ref={audioRef}
        controls
        style={{
          width: '100%',
          height: '15px',

          marginBottom: '15px',
        }}
      >
        <source src={audio} type="audio/mpeg" />
        Ваш браузер не підтримує <code>audio</code>.
      </audio>
    </div>
  );
};

export default HomePage;
