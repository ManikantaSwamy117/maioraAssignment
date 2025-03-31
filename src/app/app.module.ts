import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FooterComponent } from './footer/footer.component';
import { DatePipe } from '@angular/common';
import { EntryGuard } from 'src/services/entry.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';




@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    ProductDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDropzoneModule,
  ],
  providers: [DatePipe,EntryGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
