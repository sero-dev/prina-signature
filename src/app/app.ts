import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <main class="min-h-screen flex flex-col items-center justify-center p-4">
      <section>
        <h1 class="md:text-9xl text-7xl">
          <div>Prina</div>
          <div>Signature</div>
        </h1>
      </section>
      <small class="mt-10 text-3xl">Clothing, Mirrors, Beauty</small>

      <!-- <section class="mt-10 flex flex-col gap-4">
        <button>Instagram</button>
        <button>Email</button>
        <button>Phone</button>
        <button>Address</button>
      </section> -->
    </main>
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('prina-signature');
}
