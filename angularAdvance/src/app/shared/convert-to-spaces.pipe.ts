//create a custom pipes to manipulate data.
//this component must be added to the Module i.e. app.Module.ts as part of @NgModule Declarations.

import {Pipe, PipeTransform} from "@angular/core"

@Pipe({
    name : 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {
    
    transform(value: string, character : string): string {
        return value.replace(character, ' ');
    }

}
