const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const selectMediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = MediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //Catch error here
  }
}

button.addEventListener("click", async () => {
  //Disable button
  button.disabled = true;
  //Start picture in picture
  await videoElement.requestPictureInPicture();
  //Reset button
  button.disabled = false;
});

//On load
selectMediaStream();
