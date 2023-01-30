import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ChangeStrCasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log("Data passes in pipes: " + JSON.stringify(value))
    return value;
  }
}
