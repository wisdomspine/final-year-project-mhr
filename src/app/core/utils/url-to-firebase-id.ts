import { inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { from } from 'rxjs';

export const urlToFirebaseId = function (url: string) {
  return from(
    addDoc(collection(inject(Firestore), 'links'), { url }).then(
      (ref) => ref.id
    )
  );
};
