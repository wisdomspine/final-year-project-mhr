import { Component } from '@angular/core';

@Component({
  selector: 'disconnect-wallet-button',
  template: `
    <button mat-button>
      <span class="text"> Disconnect Wallet </span>
    </button>
  `,
  styleUrls: ['./disconnect-wallet-button.component.scss'],
})
export class DisconnectWalletButtonComponent {}
