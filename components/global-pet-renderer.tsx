'use client';

import { useEffect, useState } from 'react';
import { subscribe, getSnapshot, PetState } from '@/lib/pet-state';
import PagePet from './page-pet';

export default function GlobalPetRenderer() {
  const [petState, setPetState] = useState<PetState>(getSnapshot());

  useEffect(() => {
    const unsubscribe = subscribe((newState) => {
      setPetState(newState);
    });
    return () => unsubscribe();
  }, []);

  if (!petState.type) {
    return null;
  }

  return <PagePet type={petState.type} startX={petState.startX} startY={petState.startY} />;
}