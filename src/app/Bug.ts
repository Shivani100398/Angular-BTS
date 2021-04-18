import { PRIORITY } from './PRIORITY';
import { STATUS } from './STATUS';
import { SEVERITY } from './SEVERITY';
import { TYPE } from './TYPE';

export class Bug{
  name:string='';
  module:string='';
  buildVersion:string='';
  projectId:string='';
	developerId:string='';
  testerId:string='';
  developerID:string='';
  product:string='';
  synopsis:string='';
  description:string='';
  SubmittedOn:Date=new Date();
  etaDate:Date=new Date();
  priority:PRIORITY=PRIORITY.LOW;
  status:STATUS=STATUS.NEW;
  severity:SEVERITY=SEVERITY.LOW;
  type:TYPE=TYPE.UNITLEVEL;
}
