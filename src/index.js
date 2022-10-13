import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import QrScanner from "./scripts/qr-scanner.min.js";


/* const video = document.getElementById('qr-video');
const camQrResult = document.getElementById('cam-qr-result');
const camList = document.getElementById('cam-list'); */


function component() {
    const div = document.createElement('div');

      const title = document.createElement('div');
      title.innerHTML = "QR-Code Scanner 2.0<span class='material-icons'>qr_code_scanner</span>";
      title.classList.add('title');
      div.appendChild(title);

      const maindiv = document.createElement('div');
      maindiv.classList.add('main');
        const btncontainer = document.createElement('div');
        btncontainer.classList.add('btn-container');
            const startbtn = document.createElement('button');
            startbtn.innerHTML = "Start met Scannen";
            startbtn.id = "start-button";
            //startbtn.onclick = start();
          btncontainer.appendChild(startbtn);
            const stopbtn = document.createElement('button');
            stopbtn.innerHTML = "Stop met Scannen";
            stopbtn.id = "stop-button";
            stopbtn.style = "display:none";
            //stopbtn.onclick = stop();
          btncontainer.appendChild(stopbtn);
        maindiv.appendChild(btncontainer);

      div.appendChild(maindiv);

      const scannerdiv = document.createElement('div');
      scannerdiv.id = "ScanDiv";
        const videocontainer = document.createElement('div');
        videocontainer.id = "video-container";
          const qrvideo = document.createElement('video');
          qrvideo.id = "qr-video";
        videocontainer.appendChild(qrvideo);
          const camlist = document.createElement('select');
          camlist.id = "cam-list";
          camlist.style = "width: 100%; margin-top: 5px;";
        videocontainer.appendChild(camlist);
      scannerdiv.appendChild(videocontainer);
        const result = document.createElement('div');
        result.classList.add('result');
        result.innerHTML = "<b>Resultaat:</b><br>";
          const camspan = document.createElement('span');
          camspan.id = "cam-qr-result";
          camspan.innerHTML = "No QR code found";
        result.appendChild(camspan);
      scannerdiv.appendChild(result);
      div.appendChild(scannerdiv);
  
    return div;
}

document.body.appendChild(component());

const styleref = document.createElement('link');
styleref.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
styleref.rel = "stylesheet";
document.head.appendChild(styleref);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

    
/* const scanner = new QrScanner(video, result => setResult(camQrResult, result), {
  onDecodeError: error => {
      camQrResult.textContent = error;
      camQrResult.style.color = 'inherit';
  },
  highlightScanRegion: true,
  highlightCodeOutline: true,
});

window.scanner = scanner;

function start() {
  //scanner.start();
  ScanDiv.style.display = 'inline';
  stopbtn.style.display = 'inline';
  startbtn.style.display = 'none';
}

function stop() {
  //scanner.stop();
  ScanDiv.style.display = 'none';
  BtnStop.style.display = 'none';
  BtnStart.style.display = 'inline';
} */


if(!("Notification" in window))
  console.log("Notifications worden niet ondersteund.");
else
{
  // Bekijk of er vroeger reeds toestemming werd gegeven.
  if(Notification.permission == "granted")
  {
      // Er is reeds toestemming.
      console.log("Toestemming werd reeds eerder gegeven.");
  }
  else
  {
      if(Notification.permission !== "denied")
      {
          // Eerder werd niet geweigerd, vraag nu toestemming.
          Notification.requestPermission().then(permisson => {
              if(permisson == "granted")
              {
                  // Er werd toestemming gegeven.
                  console.log("Toestemming werd zonet gegeven.");
              }
          });
      }
      else
      {
          console.log("Toestemming werd geweigerd.");
      }
  }
}

/* QrScanner.listCameras(true).then(cameras => cameras.forEach(camera => {
        const option = document.createElement('option');
        option.value = camera.id;
        option.text = camera.label;
        camList.add(option);
}));

camList.addEventListener('change', event => {
    scanner.setCamera(event.target.value).then(updateFlashAvailability);
});

var resultaat = "";

function setResult(label, result) {
    sendnot(result.data);
    console.log(result.data);
    label.textContent = result.data;
    label.style.color = 'teal';
    clearTimeout(label.highlightTimeout);
    label.highlightTimeout = setTimeout(() => label.style.color = 'inherit', 100);
    stop();
}

function sendnot(result){
    if((result != resultaat || resultaat == "") && result != ""){
        resultaat = result;
        console.log("NOTIFICATION SEND");

        if(Notification.permission == "granted")
        {
            navigator.serviceWorker.getRegistration().then(registration => {
                registration.showNotification("Nieuwe qr code gescand!", {
                    body: result,
                    icon: "images/icons/noticon.png",
                    vibrate: [200, 100, 200]
                });
            });
        }
    }
} */