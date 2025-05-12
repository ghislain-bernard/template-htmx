// ------------------------------------------- ghislain.bernard@gmail.com ------------------------------------------- //
import htmx from 'htmx.org';
//
const environment: string = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
//
document.addEventListener('htmx:load', () => {
  console.log('template-hmtx [' + environment + ']');
  console.log('htmx.version = ' + htmx.version);
});
// ------------------------------------------- ghislain.bernard@gmail.com ------------------------------------------- //
