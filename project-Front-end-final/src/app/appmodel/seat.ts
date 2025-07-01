export class Seat{
    seatNo: string;
    status: boolean;

    constructor(seatNo:string, status: boolean){
        this.seatNo = seatNo;
        this.status = status;
    }
}

export class BookedSeat{
    flightNo: number;
    bookingDate: Date;

    constructor(flightNo: number, bookingDate: Date){
        this.flightNo = flightNo;
        this.bookingDate = bookingDate;
    }
}

export class SelectedSeat{
    seat: string;
    seatFare: number;
    constructor(seat: string, seatFare: number){
        this.seat = seat;
        this.seatFare = seatFare;
    }
}