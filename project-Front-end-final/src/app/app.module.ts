import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { ReservationComponent } from './reservation/reservation.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboadComponent } from './admin-dashboad/admin-dashboad.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { SeatsComponent } from './seats/seats.component';
import { PassengersComponent } from './passengers/passengers.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserSearchFlightComponent } from './user-search-flight/user-search-flight.component';
import { ScheduleFlightComponent } from './schedule-flight/schedule-flight.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SearchFlightByStatusComponent } from './search-flight-by-status/search-flight-by-status.component';
import { SearchFlightIdComponent } from './search-flight-id/search-flight-id.component';
import { SearchFlightSDComponent } from './search-flight-sd/search-flight-sd.component';
import { FlightStatusComponent } from './flight-status/flight-status.component';
import { CancelReservationComponent } from './cancel-reservation/cancel-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    AdminLoginComponent,
    AdminDashboadComponent,
    UserLoginComponent,
    UserRegisterComponent,
    AddFlightComponent,
    PaymentComponent,
    InvoiceComponent,
    AdminNavComponent,
    SeatsComponent,
    PassengersComponent,
    UserNavComponent,
    UserDashboardComponent,
    UserSearchFlightComponent,
    ScheduleFlightComponent,
    PageNotFoundComponent,
    HomeComponent,
    SearchFlightByStatusComponent,
    SearchFlightIdComponent,
    SearchFlightSDComponent,
    FlightStatusComponent,
    CancelReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
