import React, { useState } from 'react';
import { Button, Container } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRef } from 'react';

const SOUNDS = [
  {
    id: 0,
    key: 'x',
    src: '/sounds/kick.mp3',
  },
  {
    id: 1,
    key: 'c',
    src: '/sounds/kick.mp3',
  },
  {
    id: 2,
    key: 'n',
    src: '',
  },
  {
    id: 3,
    key: 'm',
    src: '',
  },
  {
    id: 4,
    key: 'd',
    src: '',
  },
  {
    id: 5,
    key: 'f',
    src: '/sounds/kick.mp3',
  },
  {
    id: 6,
    key: 'j',
    src: '/sounds/snare2.mp3',
  },
  {
    id: 7,
    key: 'k',
    src: '/sounds/hi-hat.mp3',
  },
];

type PadProps = {
  value: string;
  src: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Pad: React.FC<PadProps> = (props) => {
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      const currentAudioElement = document.getElementById(e.key) as HTMLAudioElement;

      if (!currentAudioElement) {
        return;
      }

      currentAudioElement.currentTime = 0;
      currentAudioElement.play();
    });
  }, []);

  return (
    <Button value={props.value} height={100} width={100} borderRadius={10} onClick={props.onClick} >
      <audio id={props.value} preload='auto'>
        <source src={props.src} type='audio/mp3' />
      </audio>
    </Button>
  );
}

export const Index: React.FC = () => {
  const onClick: PadProps['onClick'] = async (e) => {
    const currentAudioElement = document.getElementById(e.currentTarget.value) as HTMLAudioElement;
    currentAudioElement.currentTime = 0;
    await currentAudioElement.play();
  };

  return (
    <Container display={'grid'} gridTemplateColumns={'repeat(4, 1fr)'} gap={8} padding={20}>
      {SOUNDS.map((sound) => {
        return <Pad key={sound.id} value={sound.key} onClick={onClick} src={sound.src} />;
      })}
    </Container>
  );
};
