import {
  Component, OnInit, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy
  , ViewChild, ElementRef
} from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-view-children',
  templateUrl: './view-children.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ViewChildrenComponent implements OnInit {

  selectedPane: string = '';
  shouldShow: boolean = true;
  @ViewChild('paragraph', { static: false }) paragraph: ElementRef;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.selectedPane = this.paragraph.nativeElement.id;
    // this.cd.detectChanges();

    // setTimeout( () => this.selectedPane = this.paragraph.nativeElement.id, 0);
  }

  // @ViewChild('paragraph', { static: false }) set paragraph(para: ElementRef) {

  //   setTimeout( () => this.selectedPane = para.nativeElement.id, 0);
  //   console.log("detected change (after change detection)");
  // }

  toggle() {
    this.shouldShow = !this.shouldShow;
  }

  buttonEvent($event) {
    console.log("### button event called ###");
  }
}
