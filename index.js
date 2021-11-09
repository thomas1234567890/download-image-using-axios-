// Import stylesheets
import './style.css';
import axios from 'axios';
function download() {
  let img_src = document.getElementById('qr_code').src;
  // console.log(img_src);
  axios({
    // url: 'https://source.unsplash.com/random/500x500',
    // url: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=U2FsdGVkX18DvDXVusw11U/Fk4OS5mHi2toXfPXL/boS0NoxOquu0VRvfDdhXuXJD7Q5AM52f9hFKzchRlZVTA==',
    url: img_src,
    method: 'GET',
    responseType: 'blob',
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'image.jpg');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

(() => {
  console.log('init');
  document.getElementById('_btn').addEventListener('click', download);
})();
