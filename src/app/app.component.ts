import { Component } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-delay';

  async btnOnClick() {
    console.log('Por favor aguarde 3s.');
    await this.delay(2000);
    swal('Information', 'Mensagem com delay de 2000ms', 'success');
  }

  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }
}
