import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IProjects } from '../shared/interfaces/IProject.interface';

@Injectable({
  providedIn: 'root'
})
export class LightboxManagerService {

  private isVisibleLightBox = new BehaviorSubject<boolean>(false)
  private lightBoxData = new Subject<IProjects>();

  getObservableLightBox(): Observable<boolean> {
    return this.isVisibleLightBox.asObservable()
  }

  getObservableLightBoxData():Observable<IProjects> {
    return this.lightBoxData.asObservable()
  }

  setDataLightBox(data: IProjects) {
    this.lightBoxData.next(data)
  }

  setIsVisible () {
    this.isVisibleLightBox.next(!this.isVisibleLightBox.value)
  }

}
