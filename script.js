const videoEl = document.getElementById('video');
const button = document.getElementById('button');

// Prompt tp select media stream, pass to video element, then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoEl.srcObject = mediaStream;
        videoEl.onloadedmetadata = () => {
            videoEl.play();
        }
    } catch (error) {
        // Catch Error Here
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disable = true;
    //Start Picture in picture
    await videoEl.requestPictureInPicture();
    //Reset the Button
    button.disable = false;
    }
);

// load

selectMediaStream();