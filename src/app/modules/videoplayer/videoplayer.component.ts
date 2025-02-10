import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements AfterViewInit  {
  // @ViewChild('myVideo')
  // myVideo!: ElementRef | any;
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }

  imagePaths: string[] = [
    'assets/mattressandtoppers/m&t/5.png',
    'assets/mattressandtoppers/m&t/6.png',
    'assets/mattressandtoppers/m&t/7.png',
    'assets/mattressandtoppers/m&t/8.png',
    'assets/mattressandtoppers/m&t/10.png'
  ];
  currentIndex: number = 0;

  ngOnInit(): void {
    // this.togglePlayPause();
    // const videoElement = this.el.nativeElement.querySelector('#myVideo');
    // this.renderer.setAttribute(videoElement, 'muted', 'true');

    setInterval(() => {
      this.showNextImage();
    }, 3000); // Change slide every 3 seconds (adjust as needed)
  }

  showNextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.imagePaths.length;
  }
  


  }

  // ngAfterViewInit() {
  //   const video: HTMLVideoElement = this.myVideo.nativeElement;
  //   console.log("video",video)
  //   setTimeout(() => {
  //     video.play();
  //   }, 2000); 

  // }

  // togglePlayPause() {
  //   const video: HTMLVideoElement = this.myVideo.nativeElement;
  //   console.log("video",video)
  //   setTimeout(() => {
  //     video.play();
  //   }, 6000); // Delay autoplay by 1 second
  //   // if (video.paused) {
  //   //   video.play();
  //   // } else {
  //   //   video.pause();
  //   // }
  // }


