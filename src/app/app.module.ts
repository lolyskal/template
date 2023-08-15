import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NgScrollbarModule } from 'ngx-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import { DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent } from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule, ModalBodyComponent, ModalComponent, ModalFooterComponent, ModalHeaderComponent, ModalToggleDirective,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule, TableColorDirective, TableDirective,
  TabsModule,
  UtilitiesModule
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { CreateAgrementComponent } from './agrement/create-agrement/create-agrement.component';
import { ListAgrementComponent } from './agrement/list-agrement/list-agrement.component';
import { DetailAgrementComponent } from './agrement/detail-agrement/detail-agrement.component';
import {DocsComponentsModule} from "@docs-components/docs-components.module";
import {HttpClientModule} from "@angular/common/http";
import {EditAgrementComponent} from "./agrement/edit-agrement/edit-agrement.component";

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS,
    CreateAgrementComponent,
    ListAgrementComponent,
    EditAgrementComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgScrollbarModule,
    DocsComponentsModule,
    FormsModule,
    TableColorDirective,
    TableDirective,
    ModalFooterComponent,
    ModalBodyComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalToggleDirective
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
