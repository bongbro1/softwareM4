const btn_close_framevideo = document.querySelector('.js_btn_close_frame');
const btn_play_video = document.querySelector('.js_btn_play_video');
const frame_video = document.querySelector('.js_frame_video');
const iframe_video = document.querySelector('.js_frame_video iframe');
// close frame
frame_video.addEventListener('click', (event) => {
  frame_video.classList.remove('active');
  event.preventDefault();
})
iframe_video.addEventListener('click', (event) => {
  event.stopPropagation(); // ngăn chặn hành vi nổi bọt mặc định
})

// open frame
btn_play_video.addEventListener('click', () => {
  frame_video.classList.add('active');
})

// show menu mobile
const btn_showMenuTablet = document.querySelector('.js_menu_bar');
const menuTablet = document.querySelector('.js_menu_mobile');

btn_showMenuTablet.addEventListener('click', () => {
  if (menuTablet.classList.contains('active')) {
    btn_showMenuTablet.classList.replace('fa-xmark', 'fa-bars');
    menuTablet.classList.remove('active');
  }
  else {
    btn_showMenuTablet.classList.replace('fa-bars', 'fa-xmark');
    menuTablet.classList.add('active');
  }
})