import { OnInit } from '@angular/core';
import { BaseResourceModel } from '../../models/base-resource.model';
import { BaseResourceService } from '../../services/base-resource.service';

export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {
  public resources: T[] = [];
  public loader = true;

  constructor(private resourceService: BaseResourceService<T>) { }

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      resources => {
        setTimeout(() => {
          this.loader = false;
        }, 1500);
        this.resources = resources;
      },
      error => alert('Erro ao carregar a lista')
    );
  }
}
