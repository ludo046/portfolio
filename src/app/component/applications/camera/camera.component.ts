import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  public support : string = "assets/img/iphone_vide.png";
  public screenSize : number;

  @Output() getPicture = new EventEmitter<WebcamImage>();
  showWebcam = true;
  isCameraExist = true;

  errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();

  constructor() { }

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
    .then((mediaDevices: MediaDeviceInfo[]) => {
      this.isCameraExist = mediaDevices && mediaDevices.length > 0;
    });
}
onResize(event) {
  this.screenSize = event.target.innerWidth;
  if(window.innerWidth <= 390 || this.screenSize <= 390){
    this.support = "assets/img/iphone.png"
  } else if(window.innerWidth <= 820 || this.screenSize <= 820){
    this.support = "assets/img/ipad.png"
  } else if(window.innerWidth >= 821 || this.screenSize >= 821){
    this.support = "assets/img/mac.png"
  }
}

takeSnapshot(): void {
  this.trigger.next();
}

onOffWebCame() {
  this.showWebcam = !this.showWebcam;
}

handleInitError(error: WebcamInitError) {
  this.errors.push(error);
}

changeWebCame(directionOrDeviceId: boolean | string) {
  this.nextWebcam.next(directionOrDeviceId);
}

handleImage(webcamImage: WebcamImage) {
  this.getPicture.emit(webcamImage);
  this.showWebcam = false;
}

get triggerObservable(): Observable<void> {
  return this.trigger.asObservable();
}

get nextWebcamObservable(): Observable<boolean | string> {
  return this.nextWebcam.asObservable();
}
}

