/*

 ----------------------------------------------------------------------------
 | ripple-openehr-jumper: Automated OpenEHR Template Access                 |
 |                                                                          |
 | Copyright (c) 2016-18 Ripple Foundation Community Interest Company       |
 | All rights reserved.                                                     |
 |                                                                          |
 | http://rippleosi.org                                                     |
 | Email: code.custodian@rippleosi.org                                      |
 |                                                                          |
 | Author: Rob Tweed, M/Gateway Developments Ltd                            |
 |                                                                          |
 | Licensed under the Apache License, Version 2.0 (the "License");          |
 | you may not use this file except in compliance with the License.         |
 | You may obtain a copy of the License at                                  |
 |                                                                          |
 |     http://www.apache.org/licenses/LICENSE-2.0                           |
 |                                                                          |
 | Unless required by applicable law or agreed to in writing, software      |
 | distributed under the License is distributed on an "AS IS" BASIS,        |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 | See the License for the specific language governing permissions and      |
 |  limitations under the License.                                          |
 ----------------------------------------------------------------------------

  16 April 2018

*/

var buildJsonFile = require('./buildJsonFile');
var buildPulsetileToOpenEHR = require('./buildPulsetileToOpenEHR');

module.exports = function(jumperPath) {

  var text = {
    author: "{{composer.value}}",
    //dateCreated: "=> getTime(start_time)",
    dateCreated: "=> rippleDateTime(start_time, true)",
    source: "{{host}}",
    sourceId: "=> getUid(uid, host)",
    patientId: "{{patientId}}"
  };

  buildJsonFile(text, jumperPath, 'openEHR_to_Pulsetile.json');
  buildPulsetileToOpenEHR(jumperPath); // create inverse
  
};
