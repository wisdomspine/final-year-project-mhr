import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { environment } from '@env/environment.development';
import { create } from 'ipfs-http-client';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IpfsService {
  private readonly client = create({
    url: environment.infura.endpoint,
    headers: {
      authorization:
        'Basic ' +
        Buffer.from(
          environment.infura.key + ':' + environment.infura.secret
        ).toString('base64'),
    },
  });
  readonly httpClient = inject(HttpClient);
  readonly firestore = inject(Firestore);

  /**
   *
   * @param content
   * @returns path without base url
   */
  add(content: string) {
    return from(this.client.add(content).then((res) => res.path));
  }

  fullURL(path: string) {
    return `https://ipfs.io/ipfs/${path}`;
  }

  get(url: string): Observable<string> {
    return this.httpClient.get(url, {
      responseType: 'text',
    });
  }

  getFirebaseLinkId(url: string) {
    return from(
      addDoc(collection(this.firestore, 'links'), { url }).then((ref) => ref.id)
    );
  }
}
