import { Time } from "@angular/common";

export class Schedule {
    flightNo: number;
    fromDate: Date;
    toDate: Date;
    departureTime: Time;
    returnDepartureTime: Time;
}