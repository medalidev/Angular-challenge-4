import { AbstractControl } from "@angular/forms";

export function exactLength(control: AbstractControl): {[key: string]: any} | null{
    return control.value.toString().length !== 16 && control.value.toString().length !==0 ? {'missMatch' : true} : null 
}