import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AdminDashboadComponent } from './admin-dashboad/admin-dashboad.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { FlightAddStatus } from './appmodel/flight-add-status';
import { FlightStatusComponent } from './flight-status/flight-status.component';
import { CancelReservationComponent } from './cancel-reservation/cancel-reservation.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PassengersComponent } from './passengers/passengers.component';
import { PaymentComponent } from './payment/payment.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ScheduleFlightComponent } from './schedule-flight/schedule-flight.component';
import { SearchFlightByStatusComponent } from './search-flight-by-status/search-flight-by-status.component';
import { SearchFlightIdComponent } from './search-flight-id/search-flight-id.component';
import { SearchFlightSDComponent } from './search-flight-sd/search-flight-sd.component';
import { SeatsComponent } from './seats/seats.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserSearchFlightComponent } from './user-search-flight/user-search-flight.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'user-register',component:UserRegisterComponent},
  {path:'user-login',component:UserLoginComponent},
  {path:'admin-dashboad',component:AdminDashboadComponent,
      children:[
        {path:'add-flight',component:AddFlightComponent},
        {path:'admin-nav',component:AdminNavComponent},
        {path:'schedule-flight',component:ScheduleFlightComponent},
        {path:'search-flight-by-status',component:SearchFlightByStatusComponent},
        {path:'search-flight-id',component:SearchFlightIdComponent},
        {path:'search-flight-sd',component:SearchFlightSDComponent},
        {path:'flight-status',component:FlightStatusComponent}
      ]},
  {path:'user',component:UserDashboardComponent,
      children: [
        {path:'user-nav',component:UserNavComponent},
        {path:'search-flight',component:UserSearchFlightComponent},
        {path:'reservation',component:ReservationComponent},
        {path:'seats',component:SeatsComponent},
        {path:'passengers',component:PassengersComponent},
        {path:'payment',component:PaymentComponent},
        {path:'invoice',component:InvoiceComponent},
        {path:'cancel-reservation', component:CancelReservationComponent}
      ]},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
