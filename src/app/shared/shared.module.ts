import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NoriaComponent } from './components/noria/noria.component';
import { BtnGradientComponent } from './components/btn-gradient/btn-gradient.component';
import { BtnBaseComponent } from './components/btn-base/btn-base.component';
import { AngularComponent } from './icons/angular/angular.component';
import { ReactComponent } from './icons/react/react.component';
import { GridGalleryComponent } from './components/grid-gallery/grid-gallery.component';
import { CardProjectComponent } from './components/card-project/card-project.component';
import { CardBtnsComponent } from './components/card-btns/card-btns.component';
import { BtnFormSubmitComponent } from './components/btn-form-submit/btn-form-submit.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { ImageViewerComponent } from './components/lightbox/components/image-viewer/image-viewer.component';
import { DescriptionProjectComponent } from './components/lightbox/components/description-project/description-project.component';
import { TagsContainerComponent } from './components/lightbox/components/tags-container/tags-container.component';
import { IframeDemoComponent } from './components/iframe-demo/iframe-demo.component';
import { Cube3dComponent } from './components/cube3d/cube3d.component';
import { NavFilterComponent } from './components/nav-filter/nav-filter.component';
import { ToastComponent } from './components/toast/toast.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DeferComponent } from './components/defer/defer.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { EmptyProjectComponent } from './components/empty-project/empty-project.component';
import { PaginationPipe } from './pipes/pagination.pipe';

@NgModule({
  declarations: [
    NoriaComponent,
    BtnGradientComponent,
    BtnBaseComponent,
    AngularComponent,
    ReactComponent,
    GridGalleryComponent,
    CardProjectComponent,
    CardBtnsComponent,
    BtnFormSubmitComponent,
    LightboxComponent,
    ImageViewerComponent,
    DescriptionProjectComponent,
    TagsContainerComponent,
    IframeDemoComponent,
    Cube3dComponent,
    NavFilterComponent,
    ToastComponent,
    DropdownComponent,
    DeferComponent,
    PaginatorComponent,
    EmptyProjectComponent,
    PaginationPipe,
  ],
  imports: [CommonModule, NgOptimizedImage],
  exports: [
    NoriaComponent,
    BtnGradientComponent,
    BtnBaseComponent,
    AngularComponent,
    ReactComponent,
    GridGalleryComponent,
    NoriaComponent,
    BtnFormSubmitComponent,
    LightboxComponent,
    Cube3dComponent,
    DropdownComponent,
    DeferComponent,
    PaginationPipe,
  ],
})
export class SharedModule {}
