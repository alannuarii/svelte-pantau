<script>
    import { onMount, onDestroy, afterUpdate } from 'svelte';
    import jsQR from 'jsqr';
   
    let mediaStream;
    let videoEl;
    let canvasEl;
    let isCanvasOn = false;
   
    async function getWebcam() {
      mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoEl.srcObject = mediaStream;
      videoEl.play();
    }
   
    function stopWebcam() {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
    }
   
    function startCanvas() {
      isCanvasOn = true;
      canvasEl = document.createElement('canvas');
      const context = canvasEl.getContext('2d');
      canvasEl.width = videoEl.videoWidth;
      canvasEl.height = videoEl.videoHeight;
   
      const scanQRCode = () => {
        context.drawImage(videoEl, 0, 0, canvasEl.width, canvasEl.height);
        const imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height);
   
        if (code) {
          console.log('QR Code detected:', code.data);
          // Periksa apakah data QR code adalah URL
          if (isValidURL(code.data)) {
            window.location.href = code.data; // Arahkan ke URL
          } else {
            alert('QR Code: ' + code.data); // Tampilkan data QR code
          }
        }
   
        if (isCanvasOn) {
          requestAnimationFrame(scanQRCode);
        }
      };
   
      scanQRCode();
    }
   
    function stopCanvas() {
      isCanvasOn = false;
      if (canvasEl) {
        canvasEl = null;
      }
    }
   
    onMount(() => {
      getWebcam();
    });
   
    afterUpdate(() => {
      if (!isCanvasOn) {
        startCanvas();
      }
    });
   
    onDestroy(() => {
      stopCanvas();
      stopWebcam();
    });
   
    // Fungsi untuk memeriksa apakah suatu string adalah URL
    function isValidURL(string) {
      try {
        new URL(string);
        return true;
      } catch (_) {
        return false;
      }
    }
   </script>
   
   <div class="webcam d-flex flex-column align-items-center border p-3">
    <div class="position-relative foto-border">
      <!-- svelte-ignore a11y-media-has-caption -->
      <video bind:this={videoEl} />
      <canvas
        class:d-none={isCanvasOn}
        width="240"
        height="320"
        bind:this={canvasEl}
        class="position-absolute top-50 start-50 translate-middle"
      />
    </div>
   </div>
   
   <style>
    .webcam {
      border-radius: 20px;
    }
    video,
    canvas {
      width: 100%;
    }
    .foto-border {
      height: 320px;
      width: 240px;
    }
   </style>
   