(function() {
  //Set UI variables
  const videoEl = document.getElementById('video');
  const button = document.getElementById('button');

  async function selectMediaStream() {
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoEl.srcObject = mediaStream;
      videoEl.onloadedmetadata = () => {
        videoEl.play();
      };
    } catch (error) {
      //Catch an error
      console.log('Whoops, error here :', error);
    }

    button.addEventListener('click', async () => {
      button.disabled = true;
      await videoEl.requestPictureInPicture();
      button.disabled = false;
    });
  }

  selectMediaStream();
})();
