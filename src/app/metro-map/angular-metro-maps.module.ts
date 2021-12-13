/**
 * Created by szhitenev on 27.07.17.
 */
 import { Injectable, NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 
 import { Document } from './opaque-tokens/document';
import { MetroMapComponent } from './metro-map.components';
 
 let document: any = {};
 
 if (typeof window !== 'undefined') {
   document = window.document;
 }

 
 
 
 @NgModule({
 
   imports: [
     CommonModule
   ],
   declarations: [
     MetroMapComponent
   ],
   exports: [
     MetroMapComponent
   ],
   providers: [
     {provide: Document, useValue: document}
   ]
 
 })
 
 export class AmmModule {}