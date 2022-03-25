import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-module-a',
  templateUrl: './module-a.component.html',
  styleUrls: ['./module-a.component.css']
})
export class ModuleAComponent implements OnInit {

  canAccessModuleB:boolean = false;

  isUserAdmin:boolean = true; //assume this gets populated by a service


  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.pathFromRoot.forEach(value => {
      console.log(value.snapshot.data);
    })
    console.log(this.activatedRoute.parent?.snapshot.data);
    let doesRouteRequireAdmin:boolean = true; //replace with something to get this from the route config
    this.canAccessModuleB = !doesRouteRequireAdmin || this.isUserAdmin;



  }

}
