import { Directive, ElementRef, Renderer2, OnInit, OnDestroy  } from '@angular/core';
import { Subject, takeUntil, interval, take } from 'rxjs';

import { RoleService } from '../../../services/mid/day-09/role.service';
import { Role } from '../../../models/mid/day-09/role';

@Directive({
  selector: '[appIfRole]'
})
export class IfRoleDirective implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly el: ElementRef,
    private readonly renderer: Renderer2,
    private readonly roleService: RoleService
  ) {}

  ngOnInit() {
  //interval(1500).pipe(take(1)).subscribe(()=> this.destroy$.next())
   this.roleService.getRole$()
   .pipe(takeUntil(this.destroy$))
   .subscribe(role => this.updateVisibility(role));
  }

  private updateVisibility(role: Role) {
    const shouldHide = role === 'user';
    shouldHide
      ? this.renderer.setStyle(this.el.nativeElement, 'display', 'none')
      : this.renderer.removeStyle(this.el.nativeElement, 'display');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
