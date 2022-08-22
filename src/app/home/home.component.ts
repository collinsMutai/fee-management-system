import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title='Jitu School'
description= 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, voluptates. Voluptate, ipsam! Nostrum nesciunt natus ducimus voluptates, ipsum repudiandae! Excepturi, cumque repellendus minus tempora in nobis doloribus inventore aperiam molestias nostrum odit mollitia, nesciunt, asperiores ad accusamus illo iusto! Atque nisi possimus quo in dolorum ad nemo sunt error amet?'

  constructor() { }

  ngOnInit(): void {
  }

}
