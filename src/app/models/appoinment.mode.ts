import { Time } from "@angular/common";
import { DatetimeCustomEvent } from "@ionic/angular";

export interface Appoinment {
    name: string;
    email: string;
    enquiry: string;
    phone: string;
    petName: string;
    message: string;
    gender: string;
    date:Date;
    time:Time;
} 