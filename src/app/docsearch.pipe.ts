import { Pipe, PipeTransform } from '@angular/core';
import { Doctor } from './doctor';

@Pipe({
  name: 'docsearch'
})
export class DocsearchPipe implements PipeTransform {

  transform(doctor,search:string): any  {
    if(search)
       {
       return doctor.filter(doctors=>
         {
        return doctors.doc_speciality.toLowerCase().includes(search.toLowerCase()) ||
         doctors.doc_location.toLowerCase().includes(search.toLowerCase()) ;
         });
       }else
       {
       return doctor;
       }
   }

}
