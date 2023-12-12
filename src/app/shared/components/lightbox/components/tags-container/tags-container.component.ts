import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tags-container',
  templateUrl: './tags-container.component.html'
})
export class TagsContainerComponent {
  @Input() groupTagName = 'Tags'
  @Input() listTag:string[] = [];
  @Input() colorTag = 'bg-yellow-400';
}
